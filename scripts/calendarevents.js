months=['','января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
weekdays=['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
SpecialDay=2;
oDic = {
'view':'\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440',
'changes':'\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
'print':'Printer friendly',
'export':'\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439',
'filter':'\u0424\u0438\u043B\u044C\u0442\u0440 \u0441\u043E\u0431\u044B\u0442\u0438\u0439',
'jump':'\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u043C\u0435\u0441\u044F\u0446'}
AddEvent(20151203,'\u041D\u0430\u0434\u0435\u0436\u0434\u0430 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u043D\u0430 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E (\u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430) \x3Cbdo dir=\\\x27ltr\\\x27\x3E75\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00002.htm','','','','');
AddEvent(20151121,'\u041C\u0438\u0445\u0430\u0438\u043B \u0411\u043E\u0440\u0438\u0441\u043E\u0432\u0438\u0447 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E47\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00003.htm','','','','');
AddEvent(20150826,'\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0413\u0435\u043D\u043D\u0430\u0434\u044C\u0435\u0432\u043D\u0430 \u041C\u0430\u0441\u043B\u043E\u0432\u0430 (\u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430) \x3Cbdo dir=\\\x27ltr\\\x27\x3E40\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00004.htm','','','','');
AddEvent(20150617,'\u0412\u0430\u043B\u0435\u0440\u0438\u044F \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E15\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00005.htm','','','','');
AddEvent(20160617,'\u0412\u0430\u043B\u0435\u0440\u0438\u044F \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E16\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00005.htm','','','','');
AddEvent(20150720,'\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E73\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00008.htm','','','','');
AddEvent(20160720,'\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E74\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00008.htm','','','','');
AddEvent(20151103,'\u0413\u0430\u043B\u0438\u043D\u0430 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u043D\u0430 \u041A\u043E\u043D\u0434\u0440\u0430\u0442\u043E\u0432\u0430 (\u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E) \x3Cbdo dir=\\\x27ltr\\\x27\x3E67\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00013.htm','','','','');
AddEvent(20151106,'\u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E43\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00014.htm','','','','');
AddEvent(20150831,'\u0421\u0442\u0430\u043D\u0438\u0441\u043B\u0430\u0432 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E44\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00015.htm','','','','');
AddEvent(20150125,'\u0410\u043D\u0434\u0440\u0435\u0439 \u042E\u0440\u044C\u0435\u0432\u0438\u0447 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E44\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00026.htm','','','','');
AddEvent(20160125,'\u0410\u043D\u0434\u0440\u0435\u0439 \u042E\u0440\u044C\u0435\u0432\u0438\u0447 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E45\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00026.htm','','','','');
AddEvent(20150924,'\u0414\u0435\u043D\u0438\u0441 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447 \u0411\u0430\u0440\u0430\u0431\u0430\u0448 \x3Cbdo dir=\\\x27ltr\\\x27\x3E36\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00030.htm','','','','');
AddEvent(20150109,'\u041B\u044E\u0434\u043C\u0438\u043B\u0430 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u043D\u0430 (\u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430) \x3Cbdo dir=\\\x27ltr\\\x27\x3E44\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00031.htm','','','','');
AddEvent(20160109,'\u041B\u044E\u0434\u043C\u0438\u043B\u0430 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u043D\u0430 (\u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430) \x3Cbdo dir=\\\x27ltr\\\x27\x3E45\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00031.htm','','','','');
AddEvent(20151101,'\u0418\u0440\u0438\u043D\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E23\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00032.htm','','','','');
AddEvent(20151128,'\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u042D\u0434\u0443\u0430\u0440\u0434\u043E\u0432\u043D\u0430 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E (\u041A\u0430\u0440\u043D\u0435\u0435\u0432\u0430) \x3Cbdo dir=\\\x27ltr\\\x27\x3E55\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00040.htm','','','','');
AddEvent(20150421,'\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0412\u0430\u043B\u0435\u0440\u0438\u0430\u043D\u043E\u0432\u043D\u0430 (\u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E) \x3Cbdo dir=\\\x27ltr\\\x27\x3E71\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00044.htm','','','','');
AddEvent(20160421,'\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0412\u0430\u043B\u0435\u0440\u0438\u0430\u043D\u043E\u0432\u043D\u0430 (\u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E) \x3Cbdo dir=\\\x27ltr\\\x27\x3E72\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00044.htm','','','','');
AddEvent(20150414,'\u041E\u043A\u0441\u0430\u043D\u0430 \u042E\u0440\u044C\u0435\u0432\u043D\u0430 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E (\u0421\u0430\u0440\u0430\u043B) \x3Cbdo dir=\\\x27ltr\\\x27\x3E36\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00045.htm','','','','');
AddEvent(20160414,'\u041E\u043A\u0441\u0430\u043D\u0430 \u042E\u0440\u044C\u0435\u0432\u043D\u0430 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E (\u0421\u0430\u0440\u0430\u043B) \x3Cbdo dir=\\\x27ltr\\\x27\x3E37\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00045.htm','','','','');
AddEvent(20150701,'\u0422\u0430\u043C\u0430\u0440\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u043D\u0430 \u041A\u0443\u0437\u044C\u043C\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E84\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00046.htm','','','','');
AddEvent(20160701,'\u0422\u0430\u043C\u0430\u0440\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u043D\u0430 \u041A\u0443\u0437\u044C\u043C\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E85\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00046.htm','','','','');
AddEvent(20150925,'\u041C\u0430\u0440\u0438\u043D\u0430 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u043D\u0430 \u0411\u0430\u0440\u0430\u0431\u0430\u0448 \x3Cbdo dir=\\\x27ltr\\\x27\x3E29\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00051.htm','','','','');
AddEvent(20150909,'\u0415\u043B\u0435\u043D\u0430 \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u043D\u0430 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E33\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00067.htm','','','','');
AddEvent(20150506,'\u041C\u0430\u0439\u044F \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E6\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00068.htm','','','','');
AddEvent(20160506,'\u041C\u0430\u0439\u044F \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E7\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00068.htm','','','','');
AddEvent(20150312,'\u0421\u0435\u043C\u0435\u043D \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E4\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00069.htm','','','','');
AddEvent(20160312,'\u0421\u0435\u043C\u0435\u043D \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447 \u041D\u0430\u0441\u0435\u0434\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E5\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00069.htm','','','','');
AddEvent(20150110,'\u0420\u043E\u043C\u0430\u043D \u0411\u043E\u0440\u0438\u0441\u043E\u0432\u0438\u0447 \u0422\u043E\u0440\u0431\u043E\u0447\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E76\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00072.htm','','','','');
AddEvent(20160110,'\u0420\u043E\u043C\u0430\u043D \u0411\u043E\u0440\u0438\u0441\u043E\u0432\u0438\u0447 \u0422\u043E\u0440\u0431\u043E\u0447\u043A\u0438\u043D \x3Cbdo dir=\\\x27ltr\\\x27\x3E77\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00072.htm','','','','');
AddEvent(20150101,'\u042D\u043B\u043B\u0430 \u0420\u043E\u043C\u0430\u043D\u043E\u0432\u043D\u0430 \u0420\u0430\u0439\u0441\u043A\u0430\u044F \x3Cbdo dir=\\\x27ltr\\\x27\x3E41\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00073.htm','','','','');
AddEvent(20160101,'\u042D\u043B\u043B\u0430 \u0420\u043E\u043C\u0430\u043D\u043E\u0432\u043D\u0430 \u0420\u0430\u0439\u0441\u043A\u0430\u044F \x3Cbdo dir=\\\x27ltr\\\x27\x3E42\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00073.htm','','','','');
AddEvent(20150401,'\u041B\u044E\u0431\u043E\u0432\u044C \u041F\u0430\u0432\u043B\u043E\u0432\u043D\u0430 \u041C\u0438\u0440\u043E\u043D\u043E\u0441\u043E\u0432\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E17\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00075.htm','','','','');
AddEvent(20160401,'\u041B\u044E\u0431\u043E\u0432\u044C \u041F\u0430\u0432\u043B\u043E\u0432\u043D\u0430 \u041C\u0438\u0440\u043E\u043D\u043E\u0441\u043E\u0432\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E18\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00075.htm','','','','');
AddEvent(20150602,'\u0410\u043D\u0434\u0440\u0435\u0439 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u041B\u0435\u0439\u0431\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E46\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00076.htm','','','','');
AddEvent(20160602,'\u0410\u043D\u0434\u0440\u0435\u0439 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u0438\u0447 \u041B\u0435\u0439\u0431\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E47\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00076.htm','','','','');
AddEvent(20150114,'\u041F\u0435\u0442\u0440 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u0438\u0447 \u041B\u0435\u0439\u0431\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E8\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00077.htm','','','','');
AddEvent(20160114,'\u041F\u0435\u0442\u0440 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u0438\u0447 \u041B\u0435\u0439\u0431\u0430 \x3Cbdo dir=\\\x27ltr\\\x27\x3E9\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00077.htm','','','','');
AddEvent(20150525,'\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E63\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00088.htm','','','','');
AddEvent(20160525,'\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E64\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00088.htm','','','','');
AddEvent(20150803,'\u0420\u0443\u0441\u043B\u0430\u043D \u0412\u0430\u043B\u0435\u0440\u044C\u0435\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E40\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00091.htm','','','','');
AddEvent(20150825,'\u0415\u043B\u0435\u043D\u0430 \u0413\u0430\u043F\u043B\u044E\u043A (\u0417\u0443\u0431\u0435\u043D\u043A\u043E) \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00092.htm','','','','');
AddEvent(20150524,'\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u0420\u0443\u0441\u043B\u0430\u043D\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E9\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00093.htm','','','','');
AddEvent(20160524,'\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u0420\u0443\u0441\u043B\u0430\u043D\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E10\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00093.htm','','','','');
AddEvent(20150204,'\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E49\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00102.htm','','','','');
AddEvent(20160204,'\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E50\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00102.htm','','','','');
AddEvent(20150129,'\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E61\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00103.htm','','','','');
AddEvent(20160129,'\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E62\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00103.htm','','','','');
AddEvent(20150225,'\u041B\u0438\u0434\u0438\u044F (\u0417\u0443\u0431\u0435\u043D\u043A\u043E) \x3Cbdo dir=\\\x27ltr\\\x27\x3E48\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00104.htm','','','','');
AddEvent(20160225,'\u041B\u0438\u0434\u0438\u044F (\u0417\u0443\u0431\u0435\u043D\u043A\u043E) \x3Cbdo dir=\\\x27ltr\\\x27\x3E49\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00104.htm','','','','');
AddEvent(20150311,'\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00105.htm','','','','');
AddEvent(20160311,'\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447 \u0417\u0443\u0431\u0435\u043D\u043A\u043E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00105.htm','','','','');
AddEvent(20151111,'\u0413\u0430\u043B\u0438\u043D\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430 \u041C\u043E\u0440\u043E\u0437 (\u041C\u0430\u0437\u0443\u0440) \x3Cbdo dir=\\\x27ltr\\\x27\x3E78\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00111.htm','','','','');
AddEvent(20151028,'\u041F\u043E\u043B\u0438\u043D\u0430 \u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432\u043E\u0432\u043D\u0430 \u0425\u043E\u0440\u0443\u0436\u0435\u043D\u043A\u043E \x3Cbdo dir=\\\x27ltr\\\x27\x3E19\x3C/bdo\x3E \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F','','ind00151.htm','','','','');

