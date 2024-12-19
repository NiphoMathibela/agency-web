import robot from '../../assets/robot.png';

const RobotModel = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <img
        src={robot}
        alt="Robot"
        className="w-full h-full object-contain opacity-80 animate-float"
      />
    </div>
  );
};

export default RobotModel;