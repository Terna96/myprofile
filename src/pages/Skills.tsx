import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js/Express', level: 80 },
    { name: 'Python/Django', level: 75 },
    { name: 'Database Design', level: 80 },
    { name: 'UI/UX Design', level: 70 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Project Management',
    'Creative Thinking',
    'Adaptability',
    'Time Management',
    'Attention to Detail',
  ];

  const tools = [
    'VS Code',
    'Figma',
    'Git/GitHub',
    'Docker',
    'AWS',
    'Webpack',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Jest',
    'Cypress',
    'Vercel',
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold hero-text">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical and professional capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Technical Skills */}
            <Card className="glass-card shadow-medium slide-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="glass-card shadow-medium slide-in-up">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm shadow-soft hover:shadow-medium transition-shadow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Technologies */}
          <Card className="glass-card shadow-medium slide-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors"
                  >
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold hero-text mb-2">Frontend</div>
                <p className="text-muted-foreground">
                  Creating beautiful, responsive user interfaces with modern frameworks and tools.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold hero-text mb-2">Backend</div>
                <p className="text-muted-foreground">
                  Building robust, scalable server-side applications and APIs.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold hero-text mb-2">Design</div>
                <p className="text-muted-foreground">
                  Crafting intuitive user experiences with a focus on accessibility and usability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;