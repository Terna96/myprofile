import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      duration: '2022 - Present',
      description: [
        'Led a team of 5 developers in building scalable web applications',
        'Implemented microservices architecture reducing system latency by 40%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product team to define technical requirements',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects simultaneously',
        'Built responsive web applications with modern frameworks',
        'Integrated third-party APIs and payment systems',
        'Optimized application performance and user experience',
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Studio',
      location: 'San Francisco, CA',
      duration: '2019 - 2020',
      description: [
        'Created pixel-perfect implementations of designer mockups',
        'Developed reusable component libraries',
        'Implemented responsive designs for various devices',
        'Collaborated closely with UX/UI designers',
      ],
      technologies: ['React', 'SCSS', 'JavaScript', 'Webpack', 'Figma'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      duration: '2015 - 2019',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Development',
      gpa: '3.8/4.0',
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy Pro',
      location: 'Online',
      duration: '2018',
      description: 'intensive 6-month program covering modern web development technologies',
      gpa: null,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold hero-text">Resume</h1>
            <p className="text-xl text-muted-foreground">
              Professional experience and educational background
            </p>
            <Button size="lg" className="shadow-medium hover:shadow-large transition-shadow">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </Button>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 slide-in-up">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-card shadow-medium slide-in-up">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="text-lg font-semibold text-primary">{exp.company}</div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 slide-in-up">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="glass-card shadow-medium slide-in-up">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <div className="text-lg font-semibold text-primary">{edu.school}</div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">{edu.description}</p>
                    {edu.gpa && (
                      <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;