import React, { useState, useRef, useEffect } from "react";

const ScreenRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const mediaRecorder = new MediaRecorder(screenStream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(recordedBlob);
        setVideoURL(url);
      };

      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
      mediaRecorder.start();
      startTimer();
    } catch (error) {
      console.error("Error starting screen recording:", error);
    }
  };

  // Define the mediaRecorder variable using useRef
  const mediaRecorder = useRef(null);

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
      setRecording(false);
    }

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    setVideoURL(URL.createObjectURL(blob));
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const saveRecording = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "screen_recording.webm";
    a.click();

    // Revoke the Blob URL after the download link is clicked
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    return () => {
      // Clean up Blob URL when the component is unmounted
      if (videoURL) {
        URL.revokeObjectURL(videoURL);
      }
    };
  }, [videoURL]);
  return (
    <div>
      <div>
        {videoURL ? (
          <video controls>
            <source src={videoURL} type="video/webm" />
          </video>
        ) : (
          <div>
            {recording ? (
              <div>
                <p>Recording Time: {recordingTime} seconds</p>
                <button onClick={stopRecording}>Stop Recording</button>
              </div>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </div>
        )}
        {recording && (
          <div>
            <progress
              max={60} // Maximum recording time in seconds
              value={recordingTime}
            />
          </div>
        )}
        <button onClick={saveRecording} disabled={!videoURL}>
          Save Recording
        </button>
      </div>
    </div>
  );
};

export default ScreenRecorder;
