import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold hero-text">
             Terna Peter Kpensalen
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Creative Professional & Problem Solver
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences that make a difference. 
              Specializing in modern design and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
            <Button asChild size="lg" className="shadow-medium hover:shadow-large transition-shadow">
              <Link to="/portfolio">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="shadow-soft hover:shadow-medium transition-shadow">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4 fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent projects and creative endeavors that represent my passion for excellence.
            </p>
          </div>
          
          <div className="slide-in-up">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Quick Stats or Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
          <div className="text-center space-y-2 glass-card p-6 rounded-lg floating-animation">
            <div className="text-3xl font-bold hero-text">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2 glass-card p-6 rounded-lg floating-animation" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold hero-text">20+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center space-y-2 glass-card p-6 rounded-lg floating-animation" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-bold hero-text">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;