import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { submitApplication } from '@/lib/submissions';

const emptyForm = { name: '', email: '', inquiryType: '', message: '' };

const CONTACT_EMAIL = 'info@novola.org';

const INQUIRY_LABELS = {
  volunteer: 'Volunteer',
  mentorship: 'Mentor Fellows',
  donation: 'Donation',
  partnership: 'Partnership Inquiry',
  general: 'General Question',
};

// If the database is unreachable, the visitor should never be the one who loses
// out. This turns whatever they typed into a ready-to-send email so the enquiry
// still reaches us.
const buildMailtoLink = ({ name, email, inquiryType, message }) => {
  const interest = INQUIRY_LABELS[inquiryType] || inquiryType;
  const subject = interest ? `${interest} enquiry from ${name}` : `Website enquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    interest ? `Interest: ${interest}` : null,
    '',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = ({ defaultInquiry = '', applyToken = 0 }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ ...emptyForm, inquiryType: defaultInquiry });
  // Holds a mailto link when saving failed, so the message still has a way out.
  const [emailFallback, setEmailFallback] = useState('');

  // Preselect the inquiry type when a "Volunteer / Mentor / Donate" button sends
  // the visitor here, without wiping anything they've already typed. `applyToken`
  // bumps on every CTA click so re-clicking the same one re-applies the choice.
  useEffect(() => {
    if (defaultInquiry) {
      setFormData((prev) => ({ ...prev, inquiryType: defaultInquiry }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultInquiry, applyToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitApplication(formData);

    setIsSubmitting(false);

    if (!result.ok) {
      // Keep everything they typed and offer email as a second route out.
      setEmailFallback(buildMailtoLink(formData));
      toast({
        title: 'We could not reach our server',
        description: 'Your message is still here. You can send it to us by email instead.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message sent',
      description: 'Thank you for reaching out. We will get back to you soon.',
    });
    setEmailFallback('');
    setFormData({ ...emptyForm });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
          <SelectTrigger id="inquiryType" className="text-foreground">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="volunteer">Volunteer</SelectItem>
            <SelectItem value="mentorship">Mentor Fellows</SelectItem>
            <SelectItem value="donation">Donation</SelectItem>
            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
            <SelectItem value="general">General Question</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="text-foreground resize-none"
        />
      </div>

      {emailFallback && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 space-y-3">
          <p className="text-sm text-foreground leading-relaxed">
            We could not reach our server just now, so nothing has been saved yet. Nothing you
            wrote is lost: send it straight to our inbox instead, or try the button below again.
          </p>
          <Button variant="outline" className="w-full" asChild>
            <a href={emailFallback}>
              <Mail className="mr-2 h-4 w-4" />
              Send this by email instead
            </a>
          </Button>
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
