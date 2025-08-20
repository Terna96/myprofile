import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold hero-text">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know the person behind the work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1 slide-in-up">
              <Card className="overflow-hidden shadow-medium">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground">Terna</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Content */}
            <div className="lg:col-span-2 space-y-8 slide-in-up">
              <Card className="glass-card shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">My Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Welcome! I'm a passionate creative professional with over 7 years of experience 
                      in crafting digital experiences that make a meaningful impact. My journey began 
                      with a curiosity for how design and technology can solve real-world problems.
                    </p>
                    <p>
                      I believe in the power of clean, intuitive design combined with robust functionality. 
                      Whether I'm working on a complex web application or a simple landing page or Penetration testing, 
                      I approach each project with the same level of dedication and attention to detail.
                    </p>
                    <p>
                      When I'm not coding or designing, you can find me exploring new technologies, 
                      contributing to open-source projects, or working to improve my cyber Security skills.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </CardContent>
                </Card>

                <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">7+ Years</p>
                  </CardContent>
                </Card>

                <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Focus</h3>
                    <p className="text-muted-foreground">Full-Stack Development | CyberSecurity expert</p>
                  </CardContent>
                </Card>

                <Card className="glass-card shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Availability</h3>
                    <p className="text-muted-foreground">Open to opportunities</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;