import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import CheckoutButton from "../components/checkout/CheckoutButton/CheckoutButton";

const Home = () => {
  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
      </div>
      <div className="checkout-section" style={{ padding: '10px', textAlign: 'center' }}>
        <CheckoutButton
          amount={10}
          productName="Pro Plan"
          description="Full access to all Omniplex features"
        />
      </div>
    </AuthWrapper>
  );
};

export default Home;