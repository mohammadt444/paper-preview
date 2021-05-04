import PreviewComponent from "./src";
function App() {
  const data = [
    {
      paperId: "paperId",
      index: 1,
      type: "file",
      meta: {
        fileId: "master-wapp/file/5a51eb68-7007-4e12-b694-1680a398e3f3.pdf",
      },
    },
    {
      paperId: "paperId",
      index: 2,
      type: "text",
      meta:
        '<p>SALAM<br>sa&nbsp;</p> <h1>H<span style="color: rgb(14,126,196);">D</span></h1> <p><span style="color: rgb(14,126,196);">salam</span></p>',
    },
    {
      paperId: "paperId",
      index: 0,
      type: "voice",
      meta: {
        fileId: "master-wapp/file/4d2c4af6-5eae-4061-aa7e-d659f121c081.mp3",
      },
    },
    {
      paperId: "paperId",
      index: 4,
      type: "video",
      meta: { url: "https://www.aparat.com/v/0SFyn" },
    },
    {
      paperId: "paperId",
      index: 5,
      type: "image",
      meta: {
        fileId: "master-wapp/file/66f3c4e1-ebd4-415d-b0b3-5d8126803db0.png",
      },
    },
  ];
  return (
    <div className="App">
      <PreviewComponent data={data} />
    </div>
  );
}

export default App;
