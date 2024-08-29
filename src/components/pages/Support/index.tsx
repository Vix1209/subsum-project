import Layout from "./component/Layout";
import Star from "@/assets/icons/Support/star.png";
import FAQ from "@/assets/icons/Support/FAQ.png";
import Chat from "@/assets/icons/Support/chat.png";
import Whatsapp from "@/assets/icons/Support/whasapp.png";
import Phone from "@/assets/icons/Support/phone.png";
import ReportIcon from "@/assets/icons/Support/report.png";

const Support = () => {
  return (
    <div className="grid lg:grid-cols-2  px-5 lg:px-20 my-5 lg:my-0 w-full gap-10">
      <div className="rounded-2xl w-full border">
        <Layout
          icon={FAQ}
          content={"See FAQ"}
          bgColor={"bg-[#EE5D50]"}
          title={"Frequently Asked Questions"}
        />
      </div>
      <div className="rounded-2xl w-full border">
        <Layout
          icon={Chat}
          content={"Chat Now"}
          bgColor={"bg-[#FFB547]"}
          title={"Live Chat"}
        />
      </div>
      <div className="rounded-2xl w-full border">
        <Layout
          icon={Whatsapp}
          content={"Drop a Message"}
          bgColor={"bg-[#2DAE32]"}
          title={"Whatsapp"}
        />
      </div>
      <div className="rounded-2xl w-full border">
        <Layout
          icon={Phone}
          content={"Call Us"}
          bgColor={"bg-[#4169E1]"}
          title={"Phone Call"}
        />
      </div>
      <div className="rounded-2xl w-full border">
        <Layout
          icon={ReportIcon}
          content={"Not Satisfied"}
          bgColor={"bg-[#EE5D50]"}
          title={"Report Our Support"}
        />
      </div>
      <div className="rounded-2xl w-full border">
        <Layout
          icon={Star}
          content={"Coming Soon"}
          bgColor={"bg-[#2DAE32]"}
          title={"Review Our App"}
        />
      </div>
    </div>
  );
};

export default Support;
