module.exports.player=function(serv, player)
{
  player._client.on('client_command', ({payload} = {}) => {
    if(payload==1){
        //WIP: dummy
        player.system ("WIP, press ESC");
    }
  });
};