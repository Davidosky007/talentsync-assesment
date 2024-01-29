import calendar from "../assets/calendar.png";
import recorder from "../assets/recording.svg";
import video from "../assets/video-recorder.svg";

const advantages = [
  {
    id: 1,
    img: video,
    title: "Crystal-clear HD video",
    desc: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    id: 2,
    img: recorder,
    title: "Noise-canceling audio",
    desc: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    id: 3,
    img: calendar,
    title: "Scheduling made easy",
    desc: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    id: 4,
    img: video,
    title: "Bank-grade security",
    desc: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const Advantages = () => {
  return (
    <div>
      {advantages.map((advantage) => (
        <div key={advantage.id}>
          <img src={advantage.img} alt="" />
          <h3>{advantage.title}</h3>
          <p>{advantage.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
export { advantages };
