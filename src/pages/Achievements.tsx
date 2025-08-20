import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Trophy, Medal, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SA-2023-001234',
      icon: Award,
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-REACT-2022-5678',
      icon: Star,
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-PRO-2022-9012',
      icon: Trophy,
    },
    {
      title: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      credential: 'CSM-2021-3456',
      icon: Medal,
    },
  ];

  const awards = [
    {
      title: 'Developer of the Year',
      organization: 'Tech Innovations Inc.',
      year: '2023',
      description: 'Recognized for outstanding contributions to product development and team leadership.',
      icon: Trophy,
    },
    {
      title: 'Innovation Award',
      organization: 'Digital Solutions Ltd.',
      year: '2022',
      description: 'Awarded for developing a breakthrough solution that improved system performance by 60%.',
      icon: Zap,
    },
    {
      title: 'Best UI/UX Implementation',
      organization: 'Creative Studio',
      year: '2020',
      description: 'Recognized for exceptional user interface design and user experience optimization.',
      icon: Star,
    },
  ];

  const achievements = [
    {
      title: 'Open Source Contributor',
      description: '50+ contributions to various open-source projects',
      metric: '2,500+ GitHub stars',
      icon: Star,
    },
    {
      title: 'Project Success Rate',
      description: 'Successfully delivered 100% of assigned projects on time',
      metric: '50+ Projects',
      icon: Target,
    },
    {
      title: 'Team Leadership',
      description: 'Led and mentored development teams of 5-8 members',
      metric: '15+ Developers',
      icon: Medal,
    },
    {
      title: 'Performance Optimization',
      description: 'Achieved average 40% performance improvement across projects',
      metric: '40% Faster',
      icon: Zap,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold hero-text">Achievements</h1>
            <p className="text-xl text-muted-foreground">
              Certifications, awards, and professional milestones
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 slide-in-up">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="glass-card shadow-medium hover:shadow-large transition-shadow slide-in-up">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary">{cert.date}</Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: {cert.credential}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 slide-in-up">Awards & Recognition</h2>
            <div className="space-y-6">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <Card key={index} className="glass-card shadow-medium slide-in-up">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">{award.title}</h3>
                            <Badge variant="secondary">{award.year}</Badge>
                          </div>
                          <p className="text-primary font-medium mb-2">{award.organization}</p>
                          <p className="text-muted-foreground">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-8 slide-in-up">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="glass-card shadow-soft hover:shadow-medium transition-shadow slide-in-up">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          <div className="text-2xl font-bold hero-text">{achievement.metric}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;