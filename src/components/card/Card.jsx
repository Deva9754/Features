import "./Card.css";
const Card = () => {
  return (
    <>
      <h2>Cards </h2>
      <div className="wrapper">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            alt="images_loading"
          />
          <div className="info">
            <h1>Mountain</h1>
            <p>
              Big, tall mountains look really cool and make nature super
              awesome!
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            alt="images"
          />
          <div className="info">
            <h1>Road</h1>
            <p>
              Roads pave the way for journeys, connecting destinations and
              weaving the fabric of travel.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            alt="images_loading"
          />
          <div className="info">
            <h1>Protester</h1>
            <p>
              Protesters voice their concerns, demanding change and standing up
              for what they believe is right.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
