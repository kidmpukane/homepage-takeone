
export default function StorieCards(props) {
    return (
      <div className="storie-cards">

        <img 
          style={{
            display: "block",
            boxShadow: "#202427",
            backgroundColor: "#202427"
          }}
          src={`../assets/${props.img}`} 
          className="storie-card-image" 
        alt="Stories"/>

      </div>
    );
  }

  