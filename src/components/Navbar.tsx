import { AiFillApple } from "react-icons/ai";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBluetoothClick = () => {
    openModal();
  };

  return (
    <>
      <nav>
        <div>
          <ul>
            <li className='apple'>
              <AiFillApple size={20} />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='clock' onClick={handleBluetoothClick}>
              <CountrySpecificClock />
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-overlay'
      >
        <p>Seriously, you are so stupid. You thought it was real</p>
      </Modal>
    </>
  );
}

function CountrySpecificClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = format(currentTime, "h:mm a", { locale: enUS });
  const formattedDate = format(currentTime, "EEE, MMM d", { locale: enUS });

  return (
    <div className='clock-container'>
      <div className='clock-date'>{formattedDate}</div>
      <div className='clock-time'>{formattedTime}</div>
    </div>
  );
}
