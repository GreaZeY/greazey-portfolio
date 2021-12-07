import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import axios from 'axios'
import { useEffect,useState } from 'react';
const Home = () => {
  const [data,setData] = useState({
    projects:[],
    TimeLineData:[],
    
  })
  
  useEffect(async() => {
    let {data} = await axios.get('https://raw.githubusercontent.com/GreaZeY/GreaZeY/main/projects.json')
    setData(data)
  }, [])
 
  return (
    <Layout resumeLink={data.resumeLink}>
      <Section grid >
        <Hero />
        <BgAnimation />
      </Section>
      <Projects projects={data.projects}/>
      <Technologies />
      <Timeline TimeLineData={data.TimeLineData}/>
    </Layout>
  );
};

export default Home;
