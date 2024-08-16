none:
        @echo ""
all:    login build tags push
login:
        aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 735948513526.dkr.ecr.us-east-2.amazonaws.com
build:
        docker build -t disney .
tags:
        docker tag disney:latest 735948513526.dkr.ecr.us-east-2.amazonaws.com/disney:latest
push:
        docker push 735948513526.dkr.ecr.us-east-2.amazonaws.com/disney:latest
