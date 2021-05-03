import React from "react";
import ImagePreview from "../../components/imagePreview/imagePreview";
import TextPreview from "../../components/textPreview/textPreview";
import VoicePreview from "../../components/voicePreview/voicePreview";
import FilePreview from "../../components/filePreview/filePreview";
import VideoPreview from "../../components/videoPreview/videoPreview";

//TODO: object
// const contents = {
//   text: 
// }

function ContentMapper({ id, type, data }) {
  switch (type) {
    case "text":
      return <TextPreview data={data} />;
    case "draw":
    case "image":
      return <ImagePreview fileId={data.fileId} />;
    case "file":
      return <FilePreview fileId={data.fileId} />;
    case "voice":
      return <VoicePreview id={id} />;
    case "video":
      return <VideoPreview data={data} />;
    default:
      break;
  }
}

export default ContentMapper;
