
import { Icon, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const Projects = ({projects}) =>{ 

  return (
 <Section nopadding id="projects">
   <SectionDivider style = {{marginLeft:"6.7rem"}}/>
   <SectionTitle style = {{marginLeft:"6.7rem"}} main>Projects</SectionTitle>
   <GridContainer>
    {
      projects.map(({id,image,icon,title,description,tags,source,visit})=>(
        <BlogCard  className='content' key={id}>
          <Img draggable="false" src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br/>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">Open Website</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Source Code</ExternalLinks>
          </UtilityList>
          <div className="card">
            <Icon draggable="false" className="picon" src={icon} height="250px"></Icon>
            <h1>{title}</h1>
         </div>
          </BlogCard>
      ))
    } 
   </GridContainer>

 </Section>
);
}
export default Projects;