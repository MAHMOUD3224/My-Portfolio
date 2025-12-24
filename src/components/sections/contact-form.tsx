"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function Toast({ message, open }: { message: string; open: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md bg-slate-900 text-white px-4 py-2 shadow-md">
      {message}
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        setToast({ open: true, message: 'Message sent — thanks! I will reply within 1–3 days.' });
        form.reset();
      } else {
        setToast({ open: true, message: data.message || 'Something went wrong. Please try again later.' });
      }
    } catch {
      setToast({ open: true, message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast({ open: false, message: '' }), 5000);
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit} className="space-y-4">
        
        <input type="hidden" name="access_key" value="dde3d06e-8a65-40d0-b020-9aefb35be488" />
        <input type="hidden" name="subject" value="New Contact Form Message" />

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Your full name" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={6} placeholder="Tell me about your project or question" required />
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send message'}
          </Button>
        </div>
      </form>

      <Toast open={toast.open} message={toast.message} />
    </>
  );
}
