git checkout dev
git add .
git commit -m "" --allow-empty-message
git push origin dev
git checkout master
git pull origin dev
git push origin master