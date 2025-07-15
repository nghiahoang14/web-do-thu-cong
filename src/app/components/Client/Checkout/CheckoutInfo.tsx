"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Login } from "@/app/components/Client/Login/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const CheckoutInfo = (props: { onDataChange: (data: any) => void; showError: boolean }) => {
  const { onDataChange, showError } = props;
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
  }, [name, email, phone, address, selectedProvince, selectedDistrict, selectedWard, note]);

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
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg sm:text-xl font-bold">Thông tin nhận hàng</p>
        <Login />
      </div>

      <div className="flex flex-col gap-4 text-sm sm:text-base">
        {!user && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`border rounded py-2 px-3 w-full ${
                showError && !email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {showError && !email && <p className="text-red-500 font-semibold">Vui lòng nhập email</p>}

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ và tên"
              className={`border rounded py-2 px-3 w-full ${
                showError && !name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {showError && !name && <p className="text-red-500 font-semibold">Vui lòng nhập họ tên</p>}
          </>
        )}

        <PhoneInput
          country={"vn"}
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: "100%",
            height: "42px",
            borderRadius: "5px",
            border: showError && !phone ? "1px solid red" : "1px solid #ccc",
          }}
          placeholder="Nhập số điện thoại"
        />
        {showError && !phone && <p className="text-red-500 font-semibold">Vui lòng nhập sđt</p>}

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Địa chỉ"
          className={`border rounded py-2 px-3 w-full ${
            showError && !address ? "border-red-500" : "border-gray-300"
          }`}
        />
        {showError && !address && <p className="text-red-500 font-semibold">Vui lòng nhập địa chỉ</p>}

        {/* Province */}
        <div className="relative">
          <select
            value={selectedProvince?.code || ""}
            onChange={(e) => {
              const province = provinces.find((p) => p.code == e.target.value);
              setSelectedProvince(province);
            }}
            className="appearance-none border rounded py-2 px-3 w-full border-gray-300"
          >
            <option>-- Tỉnh thành --</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
          <div className="absolute top-2 right-2 pointer-events-none">
            <KeyboardArrowDownIcon />
          </div>
        </div>

        {/* District */}
        <div className="relative">
          <select
            value={selectedDistrict?.code || ""}
            onChange={(e) => {
              const district = districts.find((d) => d.code == e.target.value);
              setSelectedDistrict(district);
            }}
            className="appearance-none border rounded py-2 px-3 w-full border-gray-300"
          >
            <option>Quận huyện (tùy chọn)</option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
          <div className="absolute top-2 right-2 pointer-events-none">
            <KeyboardArrowDownIcon />
          </div>
        </div>

        {/* Ward */}
        <div className="relative">
          <select
            value={selectedWard?.code || ""}
            onChange={(e) => {
              const ward = wards.find((w) => w.code == e.target.value);
              setSelectedWard(ward);
            }}
            className="appearance-none border rounded py-2 px-3 w-full border-gray-300"
          >
            <option>Phường xã (tùy chọn)</option>
            {wards.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </select>
          <div className="absolute top-2 right-2 pointer-events-none">
            <KeyboardArrowDownIcon />
          </div>
        </div>

        {/* Ghi chú */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Ghi chú (tùy chọn)"
          className="border rounded py-2 px-3 w-full border-gray-300"
        />
      </div>
    </div>
  );
};
