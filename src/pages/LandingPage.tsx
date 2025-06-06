// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("cloud");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const chartDom = document.getElementById('growth-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2021', '2022', '2023', '2024', '2025'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Students Trained',
            type: 'bar',
            barWidth: '60%',
            data: [120, 250, 450, 780, 1200],
            itemStyle: {
              color: '#FF6B6B'
            }
          }
        ]
      };
      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">VENATRIKS</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" style={{
        backgroundImage: `url('https://public.readdy.ai/ai/img_res/19fa8d87-aadf-4f30-a3de-e9a8aea0b836.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 z-10">
              <Badge className="bg-[#E6F0FF] text-[#3B82F6] mb-4">Future-Ready Skills</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Where Future Tech Careers Begin
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Cloud & Full Stack Training for GenZ Learners. Build the skills that will shape tomorrow's technology landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                  Start Learning
                </Button>
                <Button variant="outline" className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#fff1f1] px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                  Join Free Session
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20diverse%20students%20working%20on%20laptops%20in%20a%20modern%20tech%20workspace%2C%20with%20holographic%20UI%20elements%20floating%20around%20them%2C%20professional%20lighting%2C%20clean%20aesthetic%20with%20soft%20blue%20and%20purple%20tones%2C%20showing%20GenZ%20learners%20engaged%20in%20cloud%20and%20tech%20training&width=600&height=500&seq=hero2&orientation=landscape" 
                alt="Students learning tech skills" 
                className="rounded-xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-500">Trusted by leading universities and companies</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center text-gray-400 text-2xl">
              <i className="fas fa-university mr-2"></i>
              <span className="font-medium">Stanford</span>
            </div>
            <div className="flex items-center text-gray-400 text-2xl">
              <i className="fas fa-building mr-2"></i>
              <span className="font-medium">TechCorp</span>
            </div>
            <div className="flex items-center text-gray-400 text-2xl">
              <i className="fas fa-graduation-cap mr-2"></i>
              <span className="font-medium">MIT</span>
            </div>
            <div className="flex items-center text-gray-400 text-2xl">
              <i className="fas fa-laptop-code mr-2"></i>
              <span className="font-medium">CodeLabs</span>
            </div>
            <div className="flex items-center text-gray-400 text-2xl">
              <i className="fas fa-cloud mr-2"></i>
              <span className="font-medium">CloudTech</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#F5F0FF] text-[#8B5CF6] mb-4">About VENATRIKS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission to Empower GenZ Tech Talent</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VENATRIKS is dedicated to bridging the gap between academic learning and industry requirements, 
              equipping students with practical skills that make them job-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#E6F0FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-graduation-cap text-[#3B82F6] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Train</h3>
              <p className="text-gray-600">
                Expert-led training in cutting-edge technologies with hands-on projects and real-world applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#F5F0FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-code text-[#8B5CF6] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Build</h3>
              <p className="text-gray-600">
                Create impressive portfolios through practical projects that demonstrate your capabilities to employers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#FFEFEF] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-[#FF6B6B] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Succeed</h3>
              <p className="text-gray-600">
                Launch your career with confidence through our placement assistance and industry connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FFEFEF] text-[#FF6B6B] mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Tech Training Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud technologies to full-stack development, we offer a range of programs designed to prepare you for the tech industry's demands.
            </p>
          </div>

          <Tabs defaultValue="cloud" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#F8FAFC] p-1">
                <TabsTrigger value="cloud" className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "cloud" ? "bg-white shadow-sm" : ""}`}>Cloud Training</TabsTrigger>
                <TabsTrigger value="workshops" className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "workshops" ? "bg-white shadow-sm" : ""}`}>Tech Workshops</TabsTrigger>
                <TabsTrigger value="online" className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "online" ? "bg-white shadow-sm" : ""}`}>Online Training</TabsTrigger>
                <TabsTrigger value="fullstack" className={`px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer ${activeTab === "fullstack" ? "bg-white shadow-sm" : ""}`}>Full Stack Dev</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cloud" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20cloud%20computing%20training%20session%20with%20AWS%20and%20Azure%20logos%2C%20modern%20tech%20classroom%20with%20students%20working%20on%20cloud%20infrastructure%20diagrams%2C%20clean%20minimalist%20environment%20with%20blue%20accent%20lighting%2C%20high-quality%20educational%20setting&width=600&height=400&seq=cloud1&orientation=landscape" 
                    alt="Cloud Training" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Azure & AWS Cloud Certification Training</h3>
                  <p className="text-gray-600 mb-6">
                    Master cloud technologies with our comprehensive training programs for Azure and AWS platforms. 
                    Learn cloud architecture, deployment, security, and management from certified instructors.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#3B82F6] mt-1 mr-3"></i>
                      <span>Hands-on labs with real cloud environments</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#3B82F6] mt-1 mr-3"></i>
                      <span>Certification preparation and exam guidance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#3B82F6] mt-1 mr-3"></i>
                      <span>Industry-aligned projects for portfolio building</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#3B82F6] mt-1 mr-3"></i>
                      <span>24/7 cloud lab access for practice</span>
                    </li>
                  </ul>
                  <Button className="bg-[#3B82F6] hover:bg-[#2563EB] self-start !rounded-button whitespace-nowrap cursor-pointer">
                    Explore Cloud Courses
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Interactive%20tech%20workshop%20on%20university%20campus%20with%20students%20engaged%20in%20collaborative%20learning%2C%20modern%20classroom%20with%20tech%20equipment%2C%20instructor%20demonstrating%20concepts%20on%20large%20screens%2C%20bright%20and%20energetic%20learning%20environment%20with%20purple%20accent%20lighting&width=600&height=400&seq=workshop1&orientation=landscape" 
                    alt="Tech Workshops" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">On-Campus & Online Tech Workshops</h3>
                  <p className="text-gray-600 mb-6">
                    Immersive, hands-on workshops delivered both on campus and online. Our interactive sessions 
                    focus on practical skills and current industry practices.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8B5CF6] mt-1 mr-3"></i>
                      <span>Intensive weekend bootcamps</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8B5CF6] mt-1 mr-3"></i>
                      <span>Customized workshops for university requirements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8B5CF6] mt-1 mr-3"></i>
                      <span>Industry expert guest lectures</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8B5CF6] mt-1 mr-3"></i>
                      <span>Hackathons and coding competitions</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] self-start !rounded-button whitespace-nowrap cursor-pointer">
                    View Workshop Calendar
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80" 
                    alt="Online Training" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Interactive Online Learning Experience</h3>
                  <p className="text-gray-600 mb-6 text-base md:text-lg">
                    Flexible online training with live Q&A sessions, mock interviews, and personalized feedback. 
                    Learn at your own pace with 24/7 access to course materials.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#FF6B6B] mt-1 mr-3"></i>
                      <span className="text-base md:text-lg">Weekly live Q&A sessions with instructors</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#FF6B6B] mt-1 mr-3"></i>
                      <span className="text-base md:text-lg">Mock technical interviews with feedback</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#FF6B6B] mt-1 mr-3"></i>
                      <span className="text-base md:text-lg">Community forum for peer learning</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#FF6B6B] mt-1 mr-3"></i>
                      <span className="text-base md:text-lg">Recorded sessions for flexible learning</span>
                    </li>
                  </ul>
                  <Button className="bg-[#FF6B6B] hover:bg-[#ff5252] self-start !rounded-button whitespace-nowrap cursor-pointer text-base md:text-lg px-6 py-3">
                    Join Online Program
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fullstack" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Full%20stack%20development%20classroom%20with%20code%20displayed%20on%20large%20screens%2C%20students%20working%20on%20Java%20and%20Python%20projects%2C%20modern%20tech%20learning%20environment%20with%20mint%20green%20accent%20elements%2C%20professional%20coding%20workspace%20with%20multiple%20monitors&width=600&height=400&seq=fullstack1&orientation=landscape" 
                    alt="Full Stack Development" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Full Stack Development</h3>
                  <p className="text-gray-600 mb-6">
                    Master both frontend and backend development with our intensive full stack programs. 
                    Specializations available in Java and Python tech stacks.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#B8F2E6] mt-1 mr-3"></i>
                      <span>End-to-end web application development</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#B8F2E6] mt-1 mr-3"></i>
                      <span>Database design and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#B8F2E6] mt-1 mr-3"></i>
                      <span>Modern frameworks and libraries</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#B8F2E6] mt-1 mr-3"></i>
                      <span>Capstone project with industry mentorship</span>
                    </li>
                  </ul>
                  <Button className="bg-[#10B981] hover:bg-[#059669] self-start !rounded-button whitespace-nowrap cursor-pointer">
                    Discover Full Stack Paths
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-r from-[#F5F0FF] to-[#E6F0FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-white text-[#8B5CF6] mb-4">Coming Soon</Badge>
            <h2 className="text-3xl font-bold mb-6">New Programs on the Horizon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly expanding our offerings to meet the evolving needs of the tech industry and our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFEFEF] rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-user-tie text-[#FF6B6B] text-xl"></i>
                </div>
                <CardTitle>Personality Development Program</CardTitle>
                <CardDescription>Launching Summer 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance your soft skills, communication abilities, and professional presence with our comprehensive 
                  personality development program designed specifically for tech professionals.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#fff1f1] !rounded-button whitespace-nowrap cursor-pointer">
                  Get Notified <i className="fas fa-bell ml-2"></i>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-briefcase text-[#3B82F6] text-xl"></i>
                </div>
                <CardTitle>Placement Reference Program</CardTitle>
                <CardDescription>Launching Fall 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access our network of industry partners and alumni for direct placement referrals. 
                  This program includes resume building, interview preparation, and direct connections to hiring managers.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#f0f7ff] !rounded-button whitespace-nowrap cursor-pointer">
                  Join Waitlist <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#E6F0FF] text-[#3B82F6] mb-4">Why Choose VENATRIKS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The VENATRIKS Advantage for GenZ Learners</h2>
              <p className="text-gray-600 mb-8">
                We understand the unique needs and learning styles of today's students. Our programs are designed to be engaging, 
                relevant, and directly applicable to the current job market.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFEFEF] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-project-diagram text-[#FF6B6B]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry-Relevant Projects</h3>
                    <p className="text-gray-600">Build a portfolio of real-world projects that demonstrate your capabilities to potential employers.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#F5F0FF] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-users text-[#8B5CF6]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
                    <p className="text-gray-600">Learn from industry professionals with years of experience in leading tech companies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-handshake text-[#3B82F6]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Placement Assistance</h3>
                    <p className="text-gray-600">Get support in finding internships and full-time positions through our industry connections.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#EDFCF2] rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-university text-[#10B981]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">College Partnerships</h3>
                    <p className="text-gray-600">We work directly with universities to ensure our programs complement academic learning.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F5F0FF] rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E6F0FF] rounded-full opacity-50"></div>
              <div className="relative z-10">
                <img 
                  src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20GenZ%20students%20celebrating%20success%20in%20tech%20training%2C%20graduation%20moment%20with%20certificates%2C%20modern%20tech%20campus%20environment%20with%20clean%20aesthetic%2C%20professional%20achievement%20scene%20with%20blue%20and%20purple%20lighting%20accents&width=600&height=700&seq=whychoose1&orientation=portrait" 
                  alt="Students celebrating success" 
                  className="rounded-xl shadow-xl w-full h-auto object-cover object-top"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg w-3/4">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Our Growth</h3>
                </div>
                <div id="growth-chart" className="w-full h-64"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FFEFEF] text-[#FF6B6B] mb-4">Student Voices</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the students who have transformed their careers through our programs.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            navigation
            className="testimonial-swiper"
          >
            <SwiperSlide>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Asian%20female%20student%20with%20glasses%2C%20neutral%20background%2C%20clean%20professional%20portrait%20for%20testimonial&width=100&height=100&seq=avatar1&orientation=squarish" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Jennifer S.</h4>
                      <p className="text-sm text-gray-500">Stanford University</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-600">
                    "The AWS certification course was incredibly comprehensive. The hands-on labs were particularly 
                    helpful, and I was able to secure a cloud engineering internship within weeks of completing the program."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-award text-[#3B82F6] mr-2"></i>
                    <span>Completed Cloud Training Program</span>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Black%20male%20student%2C%20neutral%20background%2C%20clean%20professional%20portrait%20for%20testimonial&width=100&height=100&seq=avatar2&orientation=squarish" />
                      <AvatarFallback>DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">David M.</h4>
                      <p className="text-sm text-gray-500">MIT</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-600">
                    "The full stack Java program completely transformed my coding abilities. The project-based approach 
                    gave me practical experience that I could immediately showcase in interviews."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-laptop-code text-[#10B981] mr-2"></i>
                    <span>Completed Full Stack Development</span>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Hispanic%20female%20student%2C%20neutral%20background%2C%20clean%20professional%20portrait%20for%20testimonial&width=100&height=100&seq=avatar3&orientation=squarish" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Alicia R.</h4>
                      <p className="text-sm text-gray-500">UC Berkeley</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="text-gray-600">
                    "The online training format was perfect for my busy schedule. The weekly Q&A sessions and mock 
                    interviews were invaluable in preparing me for the job market."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-video text-[#FF6B6B] mr-2"></i>
                    <span>Completed Online Training Program</span>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Caucasian%20male%20student%2C%20neutral%20background%2C%20clean%20professional%20portrait%20for%20testimonial&width=100&height=100&seq=avatar4&orientation=squarish" />
                      <AvatarFallback>TK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Thomas K.</h4>
                      <p className="text-sm text-gray-500">Georgia Tech</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-600">
                    "The on-campus workshop was incredibly engaging. The instructors were knowledgeable and passionate, 
                    and the hands-on exercises helped solidify my understanding of complex concepts."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-chalkboard-teacher text-[#8B5CF6] mr-2"></i>
                    <span>Attended Tech Workshop</span>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Indian%20female%20student%2C%20neutral%20background%2C%20clean%20professional%20portrait%20for%20testimonial&width=100&height=100&seq=avatar5&orientation=squarish" />
                      <AvatarFallback>PP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Priya P.</h4>
                      <p className="text-sm text-gray-500">Carnegie Mellon</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-600">
                    "The Python full stack program exceeded my expectations. I appreciated the focus on modern frameworks 
                    and the capstone project that allowed me to apply everything I learned."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="fas fa-laptop-code text-[#10B981] mr-2"></i>
                    <span>Completed Full Stack Development</span>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20tech%20pattern%20background%20with%20flowing%20digital%20elements%2C%20soft%20gradient%20from%20purple%20to%20blue%2C%20modern%20minimalist%20design%20with%20subtle%20tech%20motifs%2C%20clean%20professional%20aesthetic&width=1440&height=400&seq=cta1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Kickstart Your Tech Career with Confidence</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful students who have transformed their careers through VENATRIKS's industry-leading programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#F5F0FF] text-[#8B5CF6] mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, methodology, and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">How are the courses structured?</h3>
              <p className="text-gray-600">
                Our courses combine theoretical learning with hands-on practice. Each program includes live sessions, 
                self-paced modules, practical assignments, and a capstone project to demonstrate your skills.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Do I need prior experience?</h3>
              <p className="text-gray-600">
                While some programs require basic programming knowledge, we offer beginner-friendly courses as well. 
                Each course listing specifies the prerequisites needed to succeed.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">How long are the programs?</h3>
              <p className="text-gray-600">
                Program durations vary from 4-week intensive bootcamps to 16-week comprehensive courses. 
                We offer flexible scheduling options to accommodate student needs.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">What kind of support is provided?</h3>
              <p className="text-gray-600">
                Students receive access to instructor office hours, teaching assistants, a community forum, 
                and career services including resume reviews and interview preparation.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Are there payment plans available?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment options including installment plans and income share agreements for 
                eligible programs. Scholarships are also available for qualifying students.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">How do the placement services work?</h3>
              <p className="text-gray-600">
                Our placement assistance includes resume building, portfolio development, interview coaching, and 
                connections to our network of hiring partners. We also host regular recruitment events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with VENATRIKS</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest course offerings, tech trends, and exclusive learning resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="border-gray-300 focus:border-[#3B82F6] focus:ring-[#3B82F6] text-sm"
              />
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">VENATRIKS</h3>
              <p className="text-gray-600 mb-6">
                Empowering GenZ tech talent with industry-relevant skills and career opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors cursor-pointer">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors cursor-pointer">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="https://www.instagram.com/venatriks_com?igsh=MXNrZGU2NXk5d2Nhcw==" className="text-gray-400 hover:text-[#3B82F6] transition-colors cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.youtube.com/@venatriks" className="text-gray-400 hover:text-[#3B82F6] transition-colors cursor-pointer">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Cloud Training</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Tech Workshops</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Online Training</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Full Stack Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Upcoming Programs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#3B82F6] cursor-pointer">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#3B82F6] mt-1 mr-3"></i>
                  <span className="text-gray-600">304,Nenapu Electronic City Appartment,Electronic City Phase-1, Bangalore - 560100 ,</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-[#3B82F6] mt-1 mr-3"></i>
                  <span className="text-gray-600">reachout@venatriks.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone text-[#3B82F6] mt-1 mr-3"></i>
                  <span className="text-gray-600">+91-7022776637</span>
                </li>
                <li className="flex items-start">
                  <i className="fab fa-whatsapp text-[#3B82F6] mt-1 mr-3"></i>
                  <span className="text-gray-600">WhatsApp Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 VENATRIKS Tech Education. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700 cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700 cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700 cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App

