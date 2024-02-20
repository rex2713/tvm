import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CourtService from "../../services/court-service";
import Compressor from "compressorjs";

const CourtEdit = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);
  const params = useParams();
  // console.log(params.court_id);

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
    if (!file || file.length == 0) window.alert("你還未選擇照片");
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    console.log(file);

    CourtService.updateCourt(params.court_id, formData)
      .then(() => {
        window.alert("更新球場照片成功");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="bg-black/50">
      <div className="h-60"></div>
      <h1 className="text-center">CourtEdit</h1>
      <div className="flex justify-center gap-2">
        <input
          onChange={(e) => {
            handleFileChange(e);
          }}
          className=""
          type="file"
          multiple
        />
        <button
          onClick={() => {
            updateCourt();
          }}
          className="text-white"
        >
          上傳
        </button>
      </div>
      <div className="w-135 flex justify-center gap-2">
        {preview &&
          preview.map((item) => {
            return (
              <span key={item.name}>
                <p>{item.name}</p>
                <img src={item.previewURL} />
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default CourtEdit;
