import * as track from "../.events.win/segmentBrowser";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <button
          onClick={() =>
            track.productClicked({
              product: {
                sku: "123",
                name: "My Product",
                image_src: "https://example.com/image.jpg",
              },
            })
          }
        >
          track
        </button>
      </div>
    </>
  );
}

export default App;
