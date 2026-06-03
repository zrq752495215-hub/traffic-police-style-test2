import { Download, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ResultProfile } from '../config/results';
import { createPosterDataUrl } from '../utils/poster';

type Props = {
  result: ResultProfile;
  onClose: () => void;
};

export default function SharePoster({ result, onClose }: Props) {
  const [dataUrl, setDataUrl] = useState('');

  useEffect(() => {
    let active = true;
    createPosterDataUrl(result).then((url) => {
      if (active) setDataUrl(url);
    });
    return () => {
      active = false;
    };
  }, [result]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/70 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-md rounded-md bg-white p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-bold text-navy">分享海报</h3>
          <button onClick={onClose} className="rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="关闭">
            <X className="h-5 w-5" />
          </button>
        </div>
        {dataUrl ? (
          <>
            <img className="w-full rounded-md border border-slate-200" src={dataUrl} alt="测试结果分享海报" />
            <a
              href={dataUrl}
              download={`${result.id}-poster.png`}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-civic px-5 font-semibold text-white hover:bg-navy"
            >
              <Download className="h-5 w-5" />
              保存图片
            </a>
          </>
        ) : (
          <div className="flex min-h-96 items-center justify-center rounded-md bg-slate-50 text-slate-600">正在生成海报……</div>
        )}
      </div>
    </div>
  );
}
