import { AccountFormLayout } from "./component/AccountFormLayout";
import PhotoGlobe from "@/assets/images/Dashboard/account/photoGlobe.png";
import LittleCamera from "@/assets/images/Dashboard/account/littleCamera.png";

const Accounts = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-2 gap-5 ">
        <div className=" flex flex-col gap-y-5">
          <div className="p-5 rounded-3xl border text-center">
            <div>
              <img className="mx-auto" src={PhotoGlobe} alt="" />
            </div>
            <p className="mt-5 flex justify-center gap-x-2">
              <img className="" src={LittleCamera} alt="" /> Upload Image
            </p>
          </div>
          <div className="p-5 rounded-3xl  grid grid-cols-2 border">
            <div className="flex gap-y-2 flex-col text-start text-sm lg:text-base">
              <span>Name</span>
              <span>Email</span>
              <span>Phone Number</span>
              <span>Account Status</span>
              <span>Referal Link</span>
            </div>
            <div className="flex gap-y-2 flex-col text-end text-sm lg:text-base">
              <span>Lawal Wahab Babatunde</span>
              <span>wabdotmail@gmail.com</span>
              <span>0906 856 2949</span>
              <span>Active</span>
              <span className="flex flex-col gap-0">
                <span>www.subsum.com/tre/wd...</span>
                <span>copy</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <AccountFormLayout />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
