/**
* {service} Coach Service
* @desc handles things related to the coaches
* @param $http, $location, $mdDialog
* @return the exit tickets
*/

myApp.factory('CoachService', ['$http', '$location', '$mdDialog',
function($http, $location, $mdDialog) {

  var tickets = {};

  /**
  * @function Get Tickets
  * @desc gets the open tickets for the coach
  * @param sends the user
  * @return brings back all the tickets for the particular user.
  */
  function getTickets(user) {
    $http.get('/coach/:' + user).then(function(response) {
      tickets = response.data;
    });
  }

  /**
  * @function Ticket To Send
  * @desc posts completed ticket to the DB
  * @param completed ticket
  * @return gets the remaining tickets for the user.
  */
  function ticketToSend(completedTicket) {
    $http.post('/coach/completedTicket', completedTicket).then(function(response) {
      console.log('ticket sent');
    });
  }

  return {
    tickets : tickets,
    getTickets : getTickets,
    ticketToSend : ticketToSend
  };
}
]);
