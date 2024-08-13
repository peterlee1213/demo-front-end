# docker network for demo
if !(docker network ls -f name=demo-resume-network | grep "demo-resume-network" &> /dev/null); then
    docker network create demo-resume-network
fi