import { exec } from "node:child_process";

exec('scp -r dist root@112.125.89.224:/opt/app/word-book/front/', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }
  console.log(`scp success`);
});

exec('ssh root@112.125.89.224 cd /opt/app/word-book/front/ ; sh deploy.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令出错: ${error}`);
    return;
  }
  console.log(`deploy success`);
});
