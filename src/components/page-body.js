import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import DAModal from "./da-modal";
import ValuesContent from "./values-content";
import VideoContent from "../components/video-content";
import SummaryContent from "./summary-content";
import SummaryContentES from "./summary-content-es";
import SummaryContentHT from "./summary-content-ht";
import SummaryContentPT from "./summary-content-pt";
import AccordionContent from "../components/accordion-content";
import ContentModule from "./content-module";
import ContentContainer from "./content-container";
import { setHTML, exists, getContent } from "../helpers";

const mapStateToProps = (state) => {
  return {
    cancer: state.user.cancerType,
    lang: state.user.lang
  }
}

const PageBody = ({ page, video, videoCaption, intro, outro, complexContent, cancer,lang }) => {
  const accordions = getContent(complexContent, "field_accordions", "field_accordion_heading");
  const values = getContent(complexContent, "field_values", "field_value_heading");
  const vidUrl = getContent(video, "field_video");
  const vidPlaceholder = getContent(video, "field_video_still_image");
  page = page.slice(1);
  
  const summary =(type,complexContent,lang)=>{
    switch(type){
      case 'summary' :
        return(
          <SummaryContent>
              <ContentModule content={ complexContent } />
            </SummaryContent>
        )
      case  'mi-resumen':
        return(
          <SummaryContentES>
              <ContentModule content={ complexContent } />
            </SummaryContentES>
        )
      case 'rezime-m-nan':
        return(
        <SummaryContentHT>
              <ContentModule content={ complexContent } />
            </SummaryContentHT>)
      case 'o-meu-resumo':
        return(
        <SummaryContentPT>
              <ContentModule content={ complexContent } />
            </SummaryContentPT>)

     
      default:
        return(
          <ContentModule content={ complexContent } />
        )
       

    }
    };
      
    

  return (
    <Container>
      <VideoContent 
        videoArr={ vidUrl } 
        caption={ videoCaption } 
        placeholder={ vidPlaceholder }
        cancer={ cancer }
      />
      <ContentContainer>
        { exists(intro) ? <div className="intro-outro-content-margin">{ setHTML(intro.processed) } </div> : "" }
          <AccordionContent accordions={ accordions } />
        { 
        summary(page,complexContent,lang)
        }
      </ContentContainer>
      <ValuesContent list={ values } lang={lang} />
      <ContentContainer>
      { exists(outro) ? <div className="intro-outro-content-margin">{ setHTML(outro.processed) } </div> : "" }
      </ContentContainer>
      <DAModal title="Stop decision aid" lang={lang}>
        Are you sure you want to exit the decision aid?
      </DAModal>
    </Container>
  );
}

export default connect(mapStateToProps, null)(PageBody);
