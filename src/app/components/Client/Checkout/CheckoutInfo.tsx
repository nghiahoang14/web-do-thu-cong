import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Login } from "@/app/components/Client/Login/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const CheckoutInfo = (props: { onDataChange: (data: any) => void ,showError:boolean}) => {
  const { onDataChange ,showError} = props;
  const user = useSelector((state: RootState) => state.auth.user);
  const [phone, setPhone] = useState("");
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [note, setNote] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<any>(null);
const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
const [selectedWard, setSelectedWard] = useState<any>(null);


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");
  

  useEffect(() => {
    onDataChange({
      name,
      email,
      phone,
      address,
      selectedProvince,
      selectedDistrict,
      selectedWard,
      note,
    });
  }, [
    name,
    email,
    phone,
    address,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    note,
  ]);

  useEffect(() => {
    fetch("http://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => setProvinces(data));
  }, []);
useEffect(() => {
  if (selectedProvince?.code) {
    fetch(`http://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`)
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.districts || []);
        setWards([]);
        setSelectedDistrict(null);
        setSelectedWard(null);
      });
  }
}, [selectedProvince]);

useEffect(() => {
  if (selectedDistrict?.code) {
    fetch(`http://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`)
      .then((res) => res.json())
      .then((data) => {
        setWards(data.wards || []);
      });
  }
}, [selectedDistrict]);

  return (
    <>
      <div className="w-[40%]">
        <div className=" flex justify-between items-center">
          <p className="text-[18px] font-[700]">Thông tin nhận hàng</p>
          <Login />
        </div>
        <div className="mt-[20px] flex flex-col gap-y-[10px]">
          {!user && (
            <>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`border rounded-[5px] py-[7px] px-[5px] w-full ${
  showError && !email ? "border-red-500" : "border-[#D9D9D9]"
}`}
              />
              {showError && !email && (
                <p className="text-red-500 font-[600]">Vui lòng nhập email</p>
              )}
              <input
                type="text"
                name=""
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ và tên"
                className={`border rounded-[5px] py-[7px] px-[5px] w-full ${
  showError && !name ? "border-red-500" : "border-[#D9D9D9]"
}`}
              />
              {showError && !name && (
                <p className="text-red-500 font-[600]">Vui lòng nhập họ tên</p>
              )}
            </>
          )}

          <PhoneInput
            country={"vn"}
            value={phone}
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
             border: showError && !phone ? "1px solid red" : "1px solid #ccc",
            }}
            onChange={setPhone}
            placeholder="Nhập số điện thoại"
            disableDropdown={false}
          />
          {showError && !phone && (
            <p className="text-red-500 font-[600]">Vui lòng nhập sđt</p>
          )}
          <input
            type="text"
            name=""
            id=""
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`border rounded-[5px] py-[7px] px-[5px] w-full ${
  showError && !address ? "border-red-500" : "border-[#D9D9D9]"
}`}
          />
          {showError && !address && (
            <p className="text-red-500 font-[600]">Vui lòng nhập địa chỉ</p>
          )}
          <div className="relative">
            <select
                value={selectedProvince?.code || ""}
  onChange={(e) => {
    const province = provinces.find((p) => p.code == e.target.value);
    setSelectedProvince(province);
  }}
              className=" appearance-none border rounded-[5px] border-[#D9D9D9] py-[7px] px-[5px] w-full"
            >
              <option>-- Tỉnh thành --</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
            <div className="absolute pointer-events-none top-[6px] right-[4px] border-left">
              <KeyboardArrowDownIcon />
            </div>
          </div>

          <div className="relative">
            <select
              value={selectedDistrict?.code || ""}
  onChange={(e) => {
    const district = districts.find((d) => d.code == e.target.value);
    setSelectedDistrict(district);
  }}
              className=" appearance-none border rounded-[5px] border-[#D9D9D9] py-[7px] px-[5px] w-full"
            >
              <option>Quận huyện (tùy chọn)</option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
            <div className="absolute pointer-events-none top-[6px] right-[4px] border-left">
              <KeyboardArrowDownIcon />
            </div>
          </div>

          <div className="relative">
            <select
             value={selectedWard?.code || ""}
  onChange={(e) => {
    const ward = wards.find((w) => w.code == e.target.value);
    setSelectedWard(ward);
  }}
              className=" appearance-none border rounded-[5px] border-[#D9D9D9] py-[7px] px-[5px] w-full"
            >
              <option>Phường xã (tùy chọn)</option>
              {wards.map((ward) => (
                <option key={ward.code} value={ward.code}>
                  {ward.name}
                </option>
              ))}
            </select>
            <div className="absolute pointer-events-none top-[6px] right-[4px] border-left">
              <KeyboardArrowDownIcon />
            </div>
          </div>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note (tùy chọn)"
            className="border rounded-[5px] border-[#D9D9D9] py-[7px] px-[5px] w-full"
          />
        </div>
      </div>
    </>
  );
};
