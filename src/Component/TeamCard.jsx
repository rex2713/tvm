import React from "react";

const TeamCard = () => {
  return (
    <div className="flex w-[380px] shrink-0 flex-col items-stretch rounded-3xl bg-[#123659] p-4 shadow-sm">
      {/* 隊伍基本資訊 */}
      <div className="items-stretch justify-center whitespace-nowrap rounded-2xl bg-white bg-opacity-0 text-center text-2xl font-medium leading-10 tracking-widest text-white">
        台北教育大學體育館
      </div>
      <div className="whitespace-nowrap text-center text-xl font-black leading-8 tracking-wider text-[#FFE8A3]">
        12/01(五)-下午
      </div>
      <div className=" mt-8 items-stretch justify-center whitespace-nowrap rounded-2xl border border-solid border-white border-opacity-30 px-4 py-2 text-xl font-bold leading-8 tracking-wider text-white text-opacity-80">
        Team Apple
      </div>
      {/* 第一排球員 */}
      <div className="mt-8 flex items-stretch justify-between gap-2.5">
        <div className="flex grow basis-[0%] flex-col items-stretch justify-between rounded-2xl bg-black bg-opacity-30">
          <div className="flex items-stretch justify-between gap-1 p-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f397829795e1a82d96285befefff253f29001e3d9f8783a94a3598b5bcc9b68?apiKey=fc4466949c574717a46c67c90e575e40&"
              className="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            <div className="my-auto grow self-center whitespace-nowrap text-xs leading-5 tracking-wide text-white">
              Derek
            </div>
          </div>
          <div className="flex flex-col items-stretch px-2 py-4">
            <div className="whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              位置:主攻
            </div>
            <div className="mt-2 whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              程度:體保
            </div>
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch justify-between rounded-2xl bg-black bg-opacity-30">
          <div className="flex items-stretch justify-between gap-1 p-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/456fd92fa5619fa074cff59388fa0f7ef0ac491482142b49189686db179abc8e?apiKey=fc4466949c574717a46c67c90e575e40&"
              className="aspect-square w-10 max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            <div className="my-auto grow self-center whitespace-nowrap text-xs leading-5 tracking-wide text-white">
              Diana
            </div>
          </div>
          <div className="flex flex-col items-stretch px-2 py-4">
            <div className="whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              位置:舉球
            </div>
            <div className="mt-2 whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              程度:體保
            </div>
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch justify-between rounded-2xl bg-black bg-opacity-30">
          <div className="flex items-stretch justify-between gap-2 p-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/727ae46edbaf0653fc6b1d33e418fe6b24b955ed3dcea89faf66c3f6728daae9?apiKey=fc4466949c574717a46c67c90e575e40&"
              className="aspect-square w-10 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
            />
            <div className="my-auto grow self-center whitespace-nowrap text-xs leading-5 tracking-wide text-white">
              Luka
            </div>
          </div>
          <div className="flex flex-col items-stretch px-2 py-4">
            <div className="whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              位置:攔中
            </div>
            <div className="mt-2 whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              程度:體保
            </div>
          </div>
        </div>
      </div>
      {/* 第二排球員 */}
      <div className="mt-3 flex items-stretch justify-between gap-2.5">
        <div className="flex grow basis-[0%] flex-col items-stretch justify-between rounded-2xl bg-black bg-opacity-30">
          <div className="flex items-stretch justify-between gap-1 p-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9039bd37939d187f1e5860dcf087386f6a06bcd97d83e4ef62670d0ec7a76d7?apiKey=fc4466949c574717a46c67c90e575e40&"
              className="aspect-square w-10 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"
            />
            <div className="my-auto grow self-center whitespace-nowrap text-xs leading-5 tracking-wide text-white">
              Brandon
            </div>
          </div>
          <div className="flex flex-col items-stretch px-2 py-4">
            <div className="whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              位置:自由
            </div>
            <div className="mt-2 whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white text-opacity-80">
              程度:新手
            </div>
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch rounded-2xl border border-solid border-white border-opacity-50 bg-black bg-opacity-40 pb-9 pt-4">
          <div className="whitespace-nowrap text-center text-base font-medium leading-6 tracking-wider text-white text-opacity-80">
            主攻
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0480fe0a000da6e35786928ab9d7952e2491386bf3542e553d95e2a52f7f0028?apiKey=fc4466949c574717a46c67c90e575e40&"
            className="mt-4 aspect-square w-10 self-center overflow-hidden fill-orange-300 object-contain object-center"
          />
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch rounded-2xl border border-solid border-white border-opacity-50 bg-black bg-opacity-40 pb-9 pt-4">
          <div className="whitespace-nowrap text-center text-base font-medium leading-6 tracking-wider text-white text-opacity-80">
            攔中
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0480fe0a000da6e35786928ab9d7952e2491386bf3542e553d95e2a52f7f0028?apiKey=fc4466949c574717a46c67c90e575e40&"
            className="mt-4 aspect-square w-10 self-center overflow-hidden fill-orange-300 object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
