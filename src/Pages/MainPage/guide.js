import React from "react";
import Joyride from "react-joyride";

export default class Guide extends React.Component {
  state = {
    steps: [
      {
        target: ".step-1",
        content: "You  can arrange schedule in this page",
        placement: "center",
      },
      {
        target: ".step-2",
        content: "Type to get transportation between 2 locations.",
      },
      {
        target: ".step-3",
        content: "Or click 2 locations to get transportation in between",
      },
      {
        target: ".step-4",
        content: "Then drag the transportation way you like to calendar.",
      },
      {
        target: ".step-5",
        content:
          "Drag the tourist attraction you'd like to go to the calendar.",
      },
      {
        target: ".step-6",
        content: "Create your customized event.",
      },
      {
        target: ".step-7",
        content: "Drag to adjust the event time or date on calendar.",
      },
      {
        target: ".step-8",
        content: "Click to delete event.",
      },
      //   ...
    ],
  };

  render() {
    const { steps } = this.state;
    console.log("guide.js");

    return (
      <div className="app">
        <Joyride
          steps={steps}
          //   ...
        />
        {/* ... */}
      </div>
    );
  }
}
