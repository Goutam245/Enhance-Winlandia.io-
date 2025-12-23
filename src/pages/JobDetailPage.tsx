import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { getJobById } from '@/data/jobs';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { toast } from 'sonner';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = getJobById(id || '');

  if (!job) return <Layout><div className="container-editorial section-padding text-center"><h1 className="headline-lg">Job not found</h1><Link to="/careers" className="btn-primary mt-6 inline-block">View All Jobs</Link></div></Layout>;

  return (
    <Layout>
      <section className="container-editorial section-padding">
        <Breadcrumb items={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="headline-lg">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
              <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" />{job.salary}</span>
            </div>
            <div className="mt-8 space-y-8">
              <div><h2 className="headline-sm mb-4">About the Role</h2><p className="body-md text-muted-foreground">{job.description}</p></div>
              <div><h2 className="headline-sm mb-4">Requirements</h2><ul className="list-disc list-inside space-y-2 text-muted-foreground">{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul></div>
              <div><h2 className="headline-sm mb-4">Benefits</h2><ul className="list-disc list-inside space-y-2 text-muted-foreground">{job.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul></div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Apply Now</h3>
              <button onClick={() => toast.success('Application submitted!')} className="btn-primary w-full">Submit Application</button>
              <p className="text-xs text-muted-foreground mt-4 text-center">Or email your resume to careers@winlandia.io</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetailPage;
