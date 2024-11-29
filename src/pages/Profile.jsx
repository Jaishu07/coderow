import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-primary pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8 shadow-xl border border-white/10">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-4xl font-medium text-accent">
                {currentUser.name.charAt(0).toUpperCase()}
              </span>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{currentUser.name}</h1>
              <p className="text-white/60">{currentUser.email}</p>
              <p className="text-white/40 text-sm mt-1">
                Member since {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Account Details</h2>
              <div className="grid gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-sm text-white/40 mb-1">Name</p>
                  <p className="text-white">{currentUser.name}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-sm text-white/40 mb-1">Email</p>
                  <p className="text-white">{currentUser.email}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-sm text-white/40 mb-1">Account Created</p>
                  <p className="text-white">
                    {new Date(currentUser.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="text-center py-8 text-white/40">
                No recent activity to display
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
