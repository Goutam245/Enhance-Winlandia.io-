import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <section className="container-editorial section-padding">
        <div className="max-w-2xl">
          <h1 className="headline-xl">Contact Us</h1>
          <p className="body-lg text-muted-foreground mt-4">Have a tip, feedback, or question? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-field" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="input-field" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-field min-h-[150px]" required />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1 text-muted-foreground" /><div><p className="font-medium">Headquarters</p><p className="text-sm text-muted-foreground">123 Media Plaza, New York, NY 10001</p></div></div>
                <div className="flex items-start gap-3"><Mail className="h-5 w-5 mt-1 text-muted-foreground" /><div><p className="font-medium">Email</p><p className="text-sm text-muted-foreground">hello@winlandia.io</p></div></div>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 mt-1 text-muted-foreground" /><div><p className="font-medium">Phone</p><p className="text-sm text-muted-foreground">+1 (555) 123-4567</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
