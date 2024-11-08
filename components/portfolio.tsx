'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, ExternalLink, Star, Eye, BookOpen, Send, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"

export function PortfolioComponent() {
  const [activeTab, setActiveTab] = useState('projects')
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "A task management app that uses AI to prioritize and suggest optimal task ordering.",
      tools: ["React", "Node.js", "TensorFlow.js"],
      githubLink: "https://github.com/username/ai-task-manager",
      liveLink: "https://ai-task-manager.vercel.app",
      metrics: { stars: 120, views: 1500 },
      image: "/ai-task-manager.png"
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      tools: ["Solidity", "Ethereum", "Web3.js"],
      githubLink: "https://github.com/username/blockchain-voting",
      liveLink: "https://blockchain-voting.vercel.app",
      metrics: { stars: 89, views: 2200 },
      image: "/blockchain-voting.png"
    },
    {
      id: 3,
      title: "AR Interior Designer",
      description: "An augmented reality app for visualizing furniture and decor in real-time.",
      tools: ["Unity", "ARKit", "C#"],
      githubLink: "https://github.com/username/ar-interior-designer",
      liveLink: "https://ar-interior.vercel.app",
      metrics: { stars: 75, views: 1800 },
      image: "/interior-designer.png"
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Lessons Learned from Building an AI Task Manager",
      date: "2023-06-15",
      excerpt: "Insights into integrating AI into web applications and optimizing performance."
    },
    {
      id: 2,
      title: "The Challenges of Developing a Blockchain Voting System",
      date: "2023-07-22",
      excerpt: "Overcoming security concerns and ensuring transparency in blockchain applications."
    },
    {
      id: 3,
      title: "Exploring the Future of AR in Interior Design",
      date: "2023-08-30",
      excerpt: "How augmented reality is revolutionizing the way we design and visualize spaces."
    }
  ]

  const linkedInData = {
    name: "Jane Doe",
    title: "Full Stack Developer & AR Enthusiast",
    connections: 500,
    endorsements: 50
  }

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TensorFlow.js", level: 75 },
    { name: "Solidity", level: 70 },
    { name: "Unity", level: 80 },
    { name: "ARKit", level: 65 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src="/profile.png" alt={linkedInData.name} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">{linkedInData.name}</h1>
        <p className="text-xl text-muted-foreground mb-4">{linkedInData.title}</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm">
            <Linkedin className="mr-2 h-4 w-4" />
            {linkedInData.connections}+ connections
          </Button>
          <Button variant="outline" size="sm">
            <BookOpen className="mr-2 h-4 w-4" />
            {linkedInData.endorsements} endorsements
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <AnimatePresence>
            <motion.img
              key={activeProjectIndex}
              src={projects[activeProjectIndex].image}
              alt={projects[activeProjectIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{projects[activeProjectIndex].title}</h3>
            <p className="mb-4">{projects[activeProjectIndex].description}</p>
            <Button variant="secondary" size="sm" asChild>
              <a href={projects[activeProjectIndex].liveLink} target="_blank" rel="noopener noreferrer">
                View Project <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-muted rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-muted-foreground/20 rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="space-y-4">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden">
              <div className="md:flex h-[300px]">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map(tool => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Star className="mr-1 h-4 w-4" />
                        {project.metrics.stars} stars
                      </span>
                      <span className="flex items-center">
                        <Eye className="mr-1 h-4 w-4" />
                        {project.metrics.views} views
                      </span>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="blog" className="space-y-4">
          {blogPosts.map(post => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="md:flex items-center">
                <div className="md:w-1/4 p-6 flex flex-col items-center justify-center border-r border-muted">
                  <div className="text-3xl font-bold text-primary">
                    {new Date(post.date).toLocaleDateString('en-US', { day: '2-digit' })}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">
                        <BookOpen className="mr-2 h-4 w-4" />
                        5 min read
                      </Badge>
                      <Badge variant="outline">
                        {post.title.toLowerCase().includes('ai') ? 'AI' : 
                         post.title.toLowerCase().includes('blockchain') ? 'Blockchain' : 
                         post.title.toLowerCase().includes('ar') ? 'AR' : 'Technology'}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                      Read more
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}