import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourtService from "../../services/court-service";
import Compressor from "compressorjs";
import AuthService from "../../services/auth-service";
import Swal from "sweetalert2";

const CourtEdit = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);
  const params = useParams();
  // console.log(params.court_id);
  const navigate = useNavigate();

  //設定input更新file
  const handleFileChange = async (e) => {
    const filesArray = Array.from(e.target.files);
    console.log(filesArray);

    try {
      const compressedBlob = await Promise.all(
        filesArray.map((file) => {
          return new Promise((resolve, reject) => {
            new Compressor(file, {
              // scaleRatio: 0.5, // 将图像缩放为原始大小的一半
              quality: 0.8, //設定質量
              maxWidth: 900, // 最大寬度
              maxHeight: 500, // 最大高度
              resize: true,
              mimeType: "image/jpeg", // Specify the output image format
              success(result) {
                resolve(result);
              },
              error(error) {
                console.log(error);
                reject(error);
              },
            });
          });
        }),
      );
      console.log(compressedBlob);
      setFile(compressedBlob);

      //處理上傳圖片預覽畫面
      if (!compressedBlob || compressedBlob.length == 0) {
        return console.log("沒找到預覽網址");
      } else {
        const previewImg = [];
        for (let i = 0; i < compressedBlob.length; i++) {
          const file = compressedBlob[i];
          const name = file.name;
          const previewURL = URL.createObjectURL(file);
          previewImg.push({ name, previewURL });
        }
        setPreview(previewImg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourt = () => {
    const formData = new FormData();
    if (!file || file.length == 0)
      // window.alert("你還未選擇照片")
      Swal.fire({
        title: "尚未選擇照片",
        // text: "現在將為您導向個人資料頁面",
        icon: "warning",
        background: "#123659",
        color: "#FFFFFF",
        confirmButtonColor: "#0492D9",
      });
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    console.log(file);

    CourtService.updateCourt(params.court_id, formData)
      .then(() => {
        //處理永久硬碟複製
        AuthService.copyRenderDisk()
          .then(() => {
            // window.alert("更新球場照片成功");
            Swal.fire({
              title: "更新球場照片成功",
              // text: "現在將為您導向個人資料頁面",
              icon: "success",
              background: "#123659",
              color: "#FFFFFF",
              confirmButtonColor: "#0492D9",
            });
            navigate("/AddCourt");
          })
          .catch((e) => {
            console.error("複製RenderDisk失敗:" + e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-8 pt-28 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-[10vw]">
      <h1 className="text-4xl text-[#FFCC66]">CourtEdit</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          onChange={(e) => {
            handleFileChange(e);
          }}
          className="flex w-80 rounded-full border border-white/50 bg-white/10 px-8 py-1"
          type="file"
          multiple
        />

        <div className="grid w-full grid-cols-2 justify-center gap-4 lg:grid-cols-4">
          {preview &&
            preview.map((item) => {
              return (
                <span key={item.name}>
                  <p className="overflow-clip text-white/50">{item.name}</p>
                  <img src={item.previewURL} />
                </span>
              );
            })}
        </div>
      </div>
      <button
        onClick={() => {
          updateCourt();
        }}
        className="shrink-0 rounded-xl border-2 border-white/50 bg-[#0492D9] px-10 py-2 text-lg font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
      >
        上傳
      </button>
    </div>
  );
};

export default CourtEdit;
