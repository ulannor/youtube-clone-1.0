import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

const styles = {
  header: {
    display: 'flex',
    gap: '2.5rem', // for lg:gap-20 use media queries to change this value
    justifyContent: 'between',
    paddingTop: '0.5rem',
    marginBottom: '1.5rem',
    marginInline: '1rem'
  },
  searchForm: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    gap: '1rem'
  },
  fullWidthSearch: {
    display: 'flex'
  },
  hidden: {
    display: 'none'
  },
  searchInputContainer: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '600px'
  },
  searchInput: {
    borderRadius: '9999px 0 0 9999px',
    border: '1px solid #ccc',
    boxShadow: 'inset 0 0 5px #ccc',
    padding: '0.25rem 1rem',
    width: '100%',
    fontSize: '1.125rem',
    outline: 'none'
  },
  searchButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '0 9999px 9999px 0'
  },
  iconButtonContainer: {
    display: 'flex',
    gap: '0.5rem'
  },
  pageHeaderFirstSection: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  logo: {
    height: '1.5rem'
  }
};

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div style={styles.header}>
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        style={{
          ...styles.searchForm,
          ...(showFullWidthSearch ? styles.fullWidthSearch : styles.hidden)
        }}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            style={{ flexShrink: 0 }}
          >
            <ArrowLeft />
          </Button>
        )}
        <div style={styles.searchInputContainer}>
          <input
            type="search"
            placeholder="Search"
            style={styles.searchInput}
          />
          <Button style={styles.searchButton}>
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" style={{ flexShrink: 0 }}>
          <Mic />
        </Button>
      </form>
      <div
        style={{
          ...styles.iconButtonContainer,
          ...(showFullWidthSearch ? styles.hidden : null)
        }}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          style={{ display: 'none' }} // for md:hidden
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" style={{ display: 'none' }}> {/* for md:hidden */}
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export function PageHeaderFirstSection({ hidden }) {
  const { toggle } = useSidebarContext();

  return (
    <div
      style={{
        ...styles.pageHeaderFirstSection,
        display: hidden ? 'none' : 'flex'
      }}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} style={styles.logo} />
      </a>
    </div>
  );
}
