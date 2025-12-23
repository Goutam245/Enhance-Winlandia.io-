import Layout from '@/components/layout/Layout';
import { jobs } from '@/data/jobs';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase } from 'lucide-react';

const CareersPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-2xl">
        <h1 className="headline-xl">Join Our Team</h1>
        <p className="body-lg text-muted-foreground mt-4">Help us shape the future of journalism. We're looking for talented people who share our passion for truth and storytelling.</p>
      </div>

      <div className="mt-12 space-y-4">
        {jobs.map(job => (
          <Link key={job.id} to={`/careers/${job.id}`} className="block bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-xl group-hover:underline">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                </div>
              </div>
              <span className="btn-secondary text-sm py-2 px-4">View Position →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default CareersPage;
