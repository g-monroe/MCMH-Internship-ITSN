-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 04, 2017 at 08:00 AM
-- Server version: 5.6.36
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `serverroom`
--

-- --------------------------------------------------------

--
-- Table structure for table `racks`
--

CREATE TABLE `racks` (
  `ID` int(11) NOT NULL,
  `Name` tinytext NOT NULL,
  `Descr` mediumtext NOT NULL,
  `Img` tinytext NOT NULL,
  `Loc` tinytext NOT NULL,
  `Icon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `racks`
--

INSERT INTO `racks` (`ID`, `Name`, `Descr`, `Img`, `Loc`, `Icon`) VALUES
(1, 'Rack 1', 'Multipurpose Rack. Reporting for internt usage, sign, etc.Terminal Servers, Domain Controllers, 7 Virtual Host servers.', 'http://serverroom/imgs/racks/full_rack1.jpg', 'Data Center', 'http://serverroom/imgs/racks/icon_rack1.jpg'),
(2, 'Rack 2', 'Convalt, SQL server, Logic Server. Multi usage rack. Bottom part is not working. IBM component.', 'http://serverroom/imgs/racks/full_rack2.jpg', 'Data Center', 'http://serverroom/imgs/racks/icon_rack2.jpg'),
(3, 'Rack 3', 'Muli usage. Storage is the main use fore it.', 'http://serverroom/imgs/racks/full_rack3.jpg', 'Data Center', 'http://serverroom/imgs/racks/icon_rack3.jpg'),
(4, 'Rack 4', 'Main Switch', 'http://serverroom/imgs/racks/full_rack4.jpg', 'Data Center', 'http://serverroom/imgs/racks/icon_rack4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `ID` tinytext NOT NULL,
  `Name` tinytext NOT NULL,
  `RackID` int(11) NOT NULL,
  `ShortDesc` tinytext NOT NULL,
  `LongDesc` text NOT NULL,
  `Details` text NOT NULL,
  `Icon` tinytext NOT NULL,
  `Img` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`ID`, `Name`, `RackID`, `ShortDesc`, `LongDesc`, `Details`, `Icon`, `Img`) VALUES
('514376', 'Server ', 1, 'Switch in A-7...', 'Switch in A-7', 'Location: A-7\r\nIP Address: 192.168.3.81\r\nMAC Address: \r\nPurpose: Switch\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server2.jpg', 'http://serverroom/imgs/servers/1/server2_edited.jpg'),
('282702', 'Server ', 1, 'Patch...', 'Patch', 'Location: A-7\r\nIP Address: \r\nMAC Address: \r\nPurpose: Patch\r\nManufacturer: \r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server3.jpg', 'http://serverroom/imgs/servers/1/server3_edited.jpg'),
('159902', 'Server ', 1, 'controller for v7000...', 'controller for v7000', 'Location: A-7 \r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: Storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server4.jpg', 'http://serverroom/imgs/servers/1/server4_edited.jpg'),
('710675', 'Server ', 1, 'controller for the v7000...', 'controller for the v7000', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server5.jpg', 'http://serverroom/imgs/servers/1/server5_edited.jpg'),
('262020', 'Server ', 1, 'Storage drawer...', 'Storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server6.jpg', 'http://serverroom/imgs/servers/1/server6_edited.jpg'),
('732153', 'Server ', 1, 'Power 720 for Unix virtual machines...', 'Power 720 for Unix virtual machines', 'Location: A-7\r\nIP Address: 192.168.3.125\r\nMAC Address: \r\nPurpose: Unix\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server7.jpg', 'http://serverroom/imgs/servers/1/server7_edited.jpg'),
('381277', 'Server ', 1, 'storage drawer...', 'storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server8.jpg', 'http://serverroom/imgs/servers/1/server8_edited.jpg'),
('146746', 'Server ', 1, 'Storage drawer...', 'Storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server9.jpg', 'http://serverroom/imgs/servers/1/server9_edited.jpg'),
('275094', 'Server ', 1, 'Storage drawer...', 'Storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server10.jpg', 'http://serverroom/imgs/servers/1/server10_edited.jpg'),
('413439', 'Server ', 1, 'IDM for ris/pacs...', 'IDM for ris/pacs', 'Location: A-7\r\nIP Address: 192.168.3.61\r\nMAC Address: \r\nPurpose: IDM\r\nManufacturer: hp/Siemens \r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server11.jpg', 'http://serverroom/imgs/servers/1/server11_edited.jpg'),
('572769', 'Server ', 1, 'SDM for ris/pacs Linux...', 'SDM for ris/pacs Linux', 'Location: A-7\r\nIP Address: 192.168.3.159\r\nMAC Address: \r\nPurpose: SDM\r\nManufacturer: HP/Siemens\r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server12.jpg', 'http://serverroom/imgs/servers/1/server12_edited.jpg'),
('825592', 'Server ', 1, 'Storage drawer...', 'Storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server13.jpg', 'http://serverroom/imgs/servers/1/server13_edited.jpg'),
('137930', 'Server ', 1, 'Storage drawer...', 'Storage drawer', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server14.jpg', 'http://serverroom/imgs/servers/1/server14_edited.jpg'),
('565655', 'Server ', 1, 'Novius for ris linux...', 'Novius for ris linux', 'Location: A-7\r\nIP Address: 192.168.0.165\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server15.jpg', 'http://serverroom/imgs/servers/1/server15_edited.jpg'),
('204891', 'Server ', 1, 'VMware host 1...', 'VMware host 1', 'Location: \r\nIP Address: 192.168.0.91\r\nMAC Address: \r\nPurpose: Host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server17.jpg', 'http://serverroom/imgs/servers/1/server17_edited.jpg'),
('355102', 'Server ', 1, 'Hyper-v server mcmhblad3...', 'Hyper-v server mcmhblad3', 'Location: \r\nIP Address: 192.168.0.53\r\nMAC Address: \r\nPurpose: Host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server18.jpg', 'http://serverroom/imgs/servers/1/server18_edited.jpg'),
('232742', 'Server ', 1, 'VDIAPP application virtual server ...', 'VDIAPP application virtual server ', 'Location: \r\nIP Address: 192.168.0.181\r\nMAC Address: \r\nPurpose: App presentation\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server19.jpg', 'http://serverroom/imgs/servers/1/server19_edited.jpg'),
('606414', 'Server ', 1, 'Terminal ropc terminal server ...', 'Terminal ropc terminal server ', 'Location: A-7\r\nIP Address: 192.168.101.13\r\nMAC Address: \r\nPurpose: Terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server20.jpg', 'http://serverroom/imgs/servers/1/server20_edited.jpg'),
('428903', 'Server ', 1, 'ts04 terminal server ...', 'ts04 terminal server ', 'Location: A-7\r\nIP Address: 192.168.0.183\r\nMAC Address: \r\nPurpose: Terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server21.jpg', 'http://serverroom/imgs/servers/1/server21_edited.jpg'),
('528576', 'Server ', 1, 'mcmhblade9 Hyper-v server...', 'mcmhblade9 Hyper-v server', 'Location: \r\nIP Address: 192.168.0.204\r\nMAC Address: \r\nPurpose: Hyper-v\r\nManufacturer: HP\r\nStatus: ', 'http://serverroom/imgs/servers/1/icon_server22.jpg', 'http://serverroom/imgs/servers/1/server22_edited.jpg'),
('972671', 'Server ', 1, 'mcmhblade8 Hyper-v server...', 'mcmhblade8 Hyper-v server', 'Location: A-7\r\nIP Address: 192.168.0.203\r\nMAC Address: \r\nPurpose: hyper-v\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server23.jpg', 'http://serverroom/imgs/servers/1/server23_edited.jpg'),
('285998', 'Server ', 1, 'VDI01 virtual desktop server...', 'VDI01 virtual desktop server', 'Location: A-7\r\nIP Address: 192.168.0.199\r\nMAC Address: \r\nPurpose: Virtual desktop\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server24.jpg', 'http://serverroom/imgs/servers/1/server24_edited.jpg'),
('631655', 'Server ', 1, 'ts1 terminal server ...', 'ts1 terminal server ', 'Location: \r\nIP Address: 192.168.0.214\r\nMAC Address: \r\nPurpose: Terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server25.jpg', 'http://serverroom/imgs/servers/1/server25_edited.jpg'),
('494244', 'Server ', 1, 'VDI02 Virtual Desktop server...', 'VDI02 Virtual Desktop server', 'Location: A-7\r\nIP Address: 192.168.0.223\r\nMAC Address: \r\nPurpose: virtual desktop\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/1/icon_server26.jpg', 'http://serverroom/imgs/servers/1/server26_edited.jpg'),
('636819', 'Server ', 3, 'FortiAnalyzer...', 'FortiAnalyzer', 'Location: \r\nIP Address: 192.168.1.62\r\nMAC Address: \r\nPurpose: log analyzer \r\nManufacturer: Fortigate\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server3.jpg', 'http://serverroom/imgs/servers/3/server3_edited.jpg'),
('663323', 'Server ', 3, 'mcmhsecurtity...', 'mcmhsecurtity', 'Location: A-5\r\nIP Address: 192.168.90.11\r\nMAC Address: \r\nPurpose: Surveillance\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server4.jpg', 'http://serverroom/imgs/servers/3/server4_edited.jpg'),
('894503', 'Server ', 3, 'storage for vdi...', 'storage for vdi', 'Location: A-5\r\nIP Address: 192.168.0.40\r\nMAC Address: \r\nPurpose: Store Profiles\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server6.jpg', 'http://serverroom/imgs/servers/3/server6_edited.jpg'),
('240103', 'Server ', 3, 'mcmhblade1 test hyper-v...', 'mcmhblade1 test hyper-v', 'Location: \r\nIP Address: 192.168.0.43\r\nMAC Address: \r\nPurpose: hyper-v\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server8.jpg', 'http://serverroom/imgs/servers/3/server8_edited.jpg'),
('789996', 'Server ', 3, 'mcmhblade2 test hyper-v...', 'mcmhblade2 test hyper-v', 'Location: \r\nIP Address: 192.168.0.45\r\nMAC Address: \r\nPurpose: test hyper-v\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server9.jpg', 'http://serverroom/imgs/servers/3/server9_edited.jpg'),
('695541', 'Server ', 3, 'ppts1 terminal server...', 'ppts1 terminal server', 'Location: \r\nIP Address: 192.168.0.117\r\nMAC Address: \r\nPurpose: terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server10.jpg', 'http://serverroom/imgs/servers/3/server10_edited.jpg'),
('623388', 'Server ', 3, 'roomts terminal server...', 'roomts terminal server', 'Location: \r\nIP Address: 192.168.0.122\r\nMAC Address: \r\nPurpose: terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server11.jpg', 'http://serverroom/imgs/servers/3/server11_edited.jpg'),
('113430', 'Server ', 3, 'mcmhblade7 hyper-v server...', 'mcmhblade7 hyper-v server', 'Location: \r\nIP Address: 192.168.0.202\r\nMAC Address: \r\nPurpose: hyper-v host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server12.jpg', 'http://serverroom/imgs/servers/3/server12_edited.jpg'),
('988958', 'Server ', 3, 'ts2 terminal server...', 'ts2 terminal server', 'Location: \r\nIP Address: 192.168.0.215\r\nMAC Address: \r\nPurpose: terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server13.jpg', 'http://serverroom/imgs/servers/3/server13_edited.jpg'),
('163693', 'Server ', 3, 'ts02 terminal server...', 'ts02 terminal server', 'Location: \r\nIP Address: 192.168.0.111\r\nMAC Address: \r\nPurpose: Terminal server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server14.jpg', 'http://serverroom/imgs/servers/3/server14_edited.jpg'),
('738388', 'Server ', 3, 'not active...', 'not active', 'Location: \r\nIP Address: 0.0.0.0\r\nMAC Address: \r\nPurpose: not active\r\nManufacturer: HP\r\nStatus: not active', 'http://serverroom/imgs/servers/3/icon_server15.jpg', 'http://serverroom/imgs/servers/3/server15_edited.jpg'),
('456176', 'Server ', 3, 'dc2012r2 domain controller ...', 'dc2012r2 domain controller ', 'Location: \r\nIP Address: 192.168.0.149\r\nMAC Address: \r\nPurpose: Domain Controller\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server16.jpg', 'http://serverroom/imgs/servers/3/server16_edited.jpg'),
('183578', 'Server ', 3, 'vmware host...', 'vmware host', 'Location: A-5\r\nIP Address: 192.168.0.90\r\nMAC Address: \r\nPurpose: Host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server17.jpg', 'http://serverroom/imgs/servers/3/server17_edited.jpg'),
('844433', 'Server ', 3, 'mail2010 mail server exchange 2010...', 'mail2010 mail server exchange 2010', 'Location: \r\nIP Address: 192.168.0.145\r\nMAC Address: \r\nPurpose: Mail\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server18.jpg', 'http://serverroom/imgs/servers/3/server18_edited.jpg'),
('132327', 'Server ', 3, 'mcmhblade4 hyper-v server...', 'mcmhblade4 hyper-v server', 'Location: A-5\r\nIP Address: 192.168.0.58\r\nMAC Address: \r\nPurpose: Host server\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server19.jpg', 'http://serverroom/imgs/servers/3/server19_edited.jpg'),
('308190', 'Server ', 3, 'mcmhblade5 hyper-v server...', 'mcmhblade5 hyper-v server', 'Location: \r\nIP Address: 192.168.0.59\r\nMAC Address: \r\nPurpose: Host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server20.jpg', 'http://serverroom/imgs/servers/3/server20_edited.jpg'),
('688125', 'Server ', 3, 'mcmhblade6 hyper-v server...', 'mcmhblade6 hyper-v server', 'Location: \r\nIP Address: 192.168.0.60\r\nMAC Address: \r\nPurpose: Host\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/3/icon_server21.jpg', 'http://serverroom/imgs/servers/3/server21_edited.jpg'),
('573675', 'Server ', 4, 'patch panel to server rack...', 'patch panel to server rack', 'Location: \r\nIP Address: \r\nMAC Address: \r\nPurpose: \r\nManufacturer: \r\nStatus: ', 'http://serverroom/imgs/servers/4/icon_server2.jpg', 'http://serverroom/imgs/servers/4/server2_edited.jpg'),
('122824', 'Server ', 4, 'Upper core...', 'Upper core', 'Location: \r\nIP Address: 192.168.3.86\r\nMAC Address: \r\nPurpose: switch\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/4/icon_server3.jpg', 'http://serverroom/imgs/servers/4/server3_edited.jpg'),
('578454', 'Server ', 4, 'Core switch...', 'Core switch', 'Location: \r\nIP Address: 192.168.0.10\r\nMAC Address: \r\nPurpose: Switch and route\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/4/icon_server4.jpg', 'http://serverroom/imgs/servers/4/server4_edited.jpg'),
('671865', 'Server ', 4, 'Core switch...', 'Core switch', 'Location: \r\nIP Address: 192.168.0.10\r\nMAC Address: \r\nPurpose: switch and route\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/4/icon_server5.jpg', 'http://serverroom/imgs/servers/4/server5_edited.jpg'),
('489630', 'Server ', 4, 'Power supply for core switch...', 'Power supply for core switch', 'Location: \r\nIP Address: \r\nMAC Address: \r\nPurpose: Power\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/4/icon_server6.jpg', 'http://serverroom/imgs/servers/4/server6_edited.jpg'),
('243124', 'Server ', 2, 'sql Server 2016...', 'sql Server 2016', 'Location: A-6\r\nIP Address: 192.168.0.185\r\nMAC Address: \r\nPurpose: SQL\r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/2/icon_server1.jpg', 'http://serverroom/imgs/servers/2/server1_edited.jpg'),
('247436', 'Server ', 2, 'mediaserver commvault media server...', 'mediaserver commvault media server', 'Location: \r\nIP Address: 192.168.0.206\r\nMAC Address: \r\nPurpose: media server \r\nManufacturer: HP\r\nStatus: Active', 'http://serverroom/imgs/servers/2/icon_server2.jpg', 'http://serverroom/imgs/servers/2/server2_edited.jpg'),
('899832', 'Server ', 2, 'storage for media server...', 'storage for media server', 'Location: \r\nIP Address: 192.168.0.115\r\nMAC Address: \r\nPurpose: storage \r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/2/icon_server3.jpg', 'http://serverroom/imgs/servers/2/server3_edited.jpg'),
('422146', 'Server ', 2, 'storage for media server...', 'storage for media server', 'Location: \r\nIP Address: 192.168.0.115\r\nMAC Address: \r\nPurpose: storage\r\nManufacturer: IBM\r\nStatus: Active', 'http://serverroom/imgs/servers/2/icon_server4.jpg', 'http://serverroom/imgs/servers/2/server4_edited.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
