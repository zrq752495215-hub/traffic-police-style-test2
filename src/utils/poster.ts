import QRCode from 'qrcode';
import { siteConfig } from '../config/site';
import type { ResultProfile } from '../config/results';

export async function createPosterDataUrl(result: ResultProfile): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('无法创建海报画布');

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1440);
  gradient.addColorStop(0, '#10233f');
  gradient.addColorStop(0.55, '#17456f');
  gradient.addColorStop(1, '#f7fbff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1440);

  drawRoadLines(ctx);

  ctx.fillStyle = 'rgba(255,255,255,0.94)';
  roundedRect(ctx, 90, 120, 900, 1080, 34);
  ctx.fill();

  ctx.fillStyle = '#10233f';
  ctx.font = '600 44px "Microsoft YaHei", sans-serif';
  ctx.fillText(siteConfig.title, 140, 210);

  ctx.font = '700 78px "Microsoft YaHei", sans-serif';
  wrapText(ctx, result.name, 140, 345, 780, 86);

  ctx.fillStyle = '#f6a441';
  ctx.font = '600 34px "Microsoft YaHei", sans-serif';
  result.keywords.forEach((keyword, index) => {
    const x = 140 + index * 190;
    roundedRect(ctx, x, 450, 152, 58, 20);
    ctx.fillStyle = '#fff3df';
    ctx.fill();
    ctx.fillStyle = '#9a560d';
    ctx.fillText(keyword, x + 30, 489);
  });

  ctx.fillStyle = '#17385d';
  ctx.font = '500 42px "Microsoft YaHei", sans-serif';
  wrapText(ctx, result.summary, 140, 610, 780, 58);

  ctx.fillStyle = '#33516f';
  ctx.font = '400 32px "Microsoft YaHei", sans-serif';
  wrapText(ctx, siteConfig.sharedLine, 140, 820, 780, 48);

  const qrCanvas = document.createElement('canvas');
  await QRCode.toCanvas(qrCanvas, siteConfig.qrCodeUrl, {
    width: 220,
    margin: 1,
    color: { dark: '#10233f', light: '#ffffff' },
  });
  ctx.drawImage(qrCanvas, 140, 910, 220, 220);

  ctx.fillStyle = '#17385d';
  ctx.font = '500 34px "Microsoft YaHei", sans-serif';
  wrapText(ctx, '扫码测一测你的工作风格', 400, 980, 500, 48);

  ctx.fillStyle = '#6b7c90';
  ctx.font = '400 25px "Microsoft YaHei", sans-serif';
  wrapText(ctx, siteConfig.disclaimer, 140, 1280, 780, 36);

  return canvas.toDataURL('image/png');
}

function drawRoadLines(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = 'rgba(246, 164, 65, 0.38)';
  ctx.lineWidth = 8;
  for (let i = -3; i < 7; i += 1) {
    ctx.beginPath();
    ctx.moveTo(80 + i * 150, 1440);
    ctx.lineTo(760 + i * 120, 0);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, 250 + i * 170);
    ctx.lineTo(1080, 90 + i * 210);
    ctx.stroke();
  }
}

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  let line = '';
  let currentY = y;
  for (const char of text) {
    const nextLine = line + char;
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = nextLine;
    }
  }
  if (line) ctx.fillText(line, x, currentY);
}
