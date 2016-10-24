# Pong
2 Player-Pong


Deployment flow:

- Create development branch
  - from master
    - git checkout -b development
- Pull @ beginning of day
  - from development
    - git pull origin master
    - (npm install) if needed
- Create 1 branch per file feature
  - from development
    - git checkout -b file_feature
- By end of day
  - from branch
    - git add .
    - git commit -m "update details"
    - git push origin file_feature
    - gitHub: Pull request
    - git checkout development
  - from development
    - gitHub: Pull request
    - git branch -d branch_name
