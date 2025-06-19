
import GradientButton from "@/components/ui/button-1";

const GradientButtonDemo = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-harmony-navy/20 py-20">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-harmony-cyan mb-4">Interactive Gradient Buttons</h2>
          <p className="text-gray-300 text-lg">Experience our advanced button animations</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <GradientButton
            onClick={() => console.log('Get Started clicked')}
            width="300px"
            height="60px"
            disabled={false}
          >
            Get Started
          </GradientButton>
          
          <GradientButton
            onClick={() => console.log('Learn More clicked')}
            width="300px"
            height="60px"
            disabled={false}
          >
            Learn More
          </GradientButton>
          
          <GradientButton
            onClick={() => console.log('Contact Us clicked')}
            width="300px"
            height="60px"
            disabled={true}
          >
            Disabled Button
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export { GradientButtonDemo };
