# EveProGlow
git clone https://github.com/doubled824/EveProGlow.git
cd EveProGlow
curl -L https://tinyurl.com/proglow-starter -o starter.zip
unzip starter.zip
cp -r proglow-starter/* .
rm -rf proglow-starter starter.zip
git add .
git commit -m "feat: full ProGlow launch – booking, deposits, client portal, AI"
git push
