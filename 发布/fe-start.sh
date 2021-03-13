cd ~/source/kaoshi3/iyunxiao-yuejuan
#git checkout -f sandbox
git pull
export NODE_ENV=dev
export NODE_APP_INSTANCE=dev
build_start=`date +%s`
npm run build:dev
build_end=`date +%s`
build_time=$((build_end-build_start))
echo "build time: ${build_time}s"
export NODE_ENV=dev
#pm2 delete yj2-fe
pm2 start pm2-dev.json