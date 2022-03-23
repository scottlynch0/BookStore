//import { getOrdersList } from './app';

window.getOrders = function getOrders() {
    const orders = getOrdersList(0, 20);
      const orderList = orders.map(order => JSON.parse(order));
      console.log(orderList);
  
      document.writeln("<h1 style=\"text-align:center;\">ORDERS</h1>");
      document.writeln("<table width=\"90%\" border=\"1\">");
      document.writeln("<tr><th>Book Name</th><th>Qty</th><th>Total</th><th>Time</th></tr>");
      orderList.forEach(createRow)
      document.write("</table>");
  }
  
  function createRow(order) {
      document.write("<tr>");
      document.write("<td>"+order.bookName+"</td>");
      document.write("<td>"+order.quantity+"</td>");
      document.write("<td>"+order.totalPrice+"</td>");
      document.write("<td>"+order.time+"</td>");
      document.write("</tr>");
  }


