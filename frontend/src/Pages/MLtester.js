import "./MLtester.css";
import ImageCapture from "../components/ImageCapture";
import axios from "axios";

function MLtester() {
  const testConnection = async () => {
    try {
      const response = await axios.get("http://localhost:8000/ping");
      console.log("Backend response:", response.data);
      alert("Connection successful!");
    } catch (error) {
      console.error("Error testing connection:", error);
      alert("Connection failed!");
    }
  };

  return (
    <div className="App bg-[#13171b] min-h-[100vh] flex flex-wrap justify-center items-center">
      <div className=" bg-black text-[#ff0000] min-h-[500px] w-[800px] flex flex-wrap justify-center ">
        <ImageCapture />
        <div className=" "></div>
      </div>
      <button
        className=" absolute bottom-0 right-0 text-[#ff0000]"
        onClick={testConnection}
      >
        TEST PING
      </button>
    </div>
  );
}

export default MLtester;
