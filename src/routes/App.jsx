export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigator.clipboard.writeText(
            JSON.parse(localStorage.getItem("auth")).currentUser.stsTokenManager
              .accessToken,
          );
        }}
      >
        COPY AUTHTOKEN
      </button>
    </div>
  );
}
